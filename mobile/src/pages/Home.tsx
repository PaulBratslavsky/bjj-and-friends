import { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonAvatar,
  IonImg,
  IonLabel,
  IonIcon,
} from "@ionic/react";

import { videocam } from "ionicons/icons";


interface StrapiResponse {
  data: any[];
  meta: {};
}

import { useStrapiAPI } from "./../hooks/use-strapi-api";
import "./Home.css";

const Home: React.FC = () => {
  const { fetchData } = useStrapiAPI();
  const [data, setData] = useState({} as StrapiResponse);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData("/api/techniques?populate=*");
      setData(data);
    };
    fetch();
  }, []);

  
  function BJJTechniquesList({ techniques }: any){
    if (!techniques) return null;
    return (
      <IonList>
        {techniques!.map((technique: any) => {
          console.log(technique)
          const { id, attributes } = technique;
          console.log(attributes)
          return (
            <IonItem key={id}>
              <IonAvatar slot="start">
                <IonImg src="https://images.pexels.com/photos/16511744/pexels-photo-16511744.jpeg" />
              </IonAvatar>
              <IonLabel>
                <h2>{attributes.name}</h2>
                <p>{attributes.user.data.attributes.username}</p>
                <p>{attributes.type.data.attributes.name}</p>
              </IonLabel>
              <IonIcon slot="end" icon={videocam}></IonIcon>
            </IonItem>
          );
        })}
      </IonList>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">BJJ FRIENDS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BJJTechniquesList techniques={data.data} /> 
      </IonContent>
    </IonPage>
  );
};

export default Home;
