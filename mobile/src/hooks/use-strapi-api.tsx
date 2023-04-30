  // TODO: Add error handling
  // TODO: Add env variable for url

interface StrapiAPI {
  fetchData: (query: string) => Promise<any>;
}

export function useStrapiAPI(): StrapiAPI {

  async function fetchData(query: string): Promise<any> {
    const url = "http://localhost:1337";
    const path = url + query;
    const response = await fetch(path);
    const data = await response.json();
    return data;
  }

  return {
    fetchData,
  }
}
