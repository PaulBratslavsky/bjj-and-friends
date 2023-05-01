import type { V2_MetaFunction } from "@remix-run/node";
import HeroArea from "~/components/HeroArea";

export const meta: V2_MetaFunction = () => {
  return [{ title: "BJJ & Friends" }];
};

export default function Index() {
  return (
    <div>
      <HeroArea data={[]} />
    </div>
  );
}
