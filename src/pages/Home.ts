import "../components/character-card.ts";
import getData from "../utils/getData";

const HomePage = async (): Promise<HTMLDivElement> => {
  const characters: any = await getData();
  const pageContainer: HTMLDivElement = document.createElement("div");
  pageContainer.classList.add("home-page");
  pageContainer.innerHTML = `${characters.results
    .map(
      (character: any) =>
        `<character-card characterid=${character.id} image=${character.image} name=${character.name} species=${character.species}>
        </character-card>`
    )
    .join("")}`;
  // });

  return pageContainer;
};

export default HomePage;
