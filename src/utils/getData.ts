const API: string = "https://rickandmortyapi.com/api/character";

const getData = async (id?: string) => {
  const apiURL = id ? `${API}${id}` : API;
  try {
    const response: Response = await fetch(apiURL);
    const data: any = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
