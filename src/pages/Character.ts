import "../components/character-card.ts";
import "../components/character-description.ts";
import getHash from "../utils/getHash";
import getData from "../utils/getData";

const CharacterPage = async (): Promise<HTMLDivElement> => {
  // gets hash and data from the API
  const id = getHash();
  const character = await getData(id);

  // create the elements
  const pageContainer: HTMLDivElement = document.createElement("div");

  // add a class in the div container
  pageContainer.classList.add("character-page");

  pageContainer.innerHTML = `
    <character-card characterid=${character.id} image=${character.image} name=${character.name} species=${character.species}>
    </character-card>
    <character-description episodes=${character.episode.length} status=${character.status} species=${character.species} gender=${character.gender} origin=${character.origin.name} loaction=${character.location.name}>
    </character-description>
  `;

  return pageContainer;
};

export default CharacterPage;
