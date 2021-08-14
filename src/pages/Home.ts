import "../components/character-card.ts";
import getData from "../utils/getData";

const HomePage = async (): Promise<HTMLDivElement> => {
  const characters: any = await getData();
  const pageContainer: HTMLDivElement = document.createElement("div");
  pageContainer.classList.add("home-page");
  characters.results.map((character: any) => {
    const characterCard: HTMLElement = document.createElement("character-card");
    characterCard.setAttribute("characterid", character.id);
    characterCard.setAttribute("image", character.image);
    characterCard.setAttribute("name", character.name);
    characterCard.setAttribute("species", character.species);
    pageContainer.appendChild(characterCard);
  });

  return pageContainer;
};

export default HomePage;
