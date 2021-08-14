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
  const characterCard: HTMLElement = document.createElement("character-card");
  const characterDescription: HTMLElement = document.createElement(
    "character-description"
  );

  // add a class in the div container
  pageContainer.classList.add("character-page");

  // apend the component character-card and sets atributes
  pageContainer.appendChild(characterCard);
  characterCard.setAttribute("characterid", character.id);
  characterCard.setAttribute("image", character.image);
  characterCard.setAttribute("name", character.name);
  characterCard.setAttribute("species", character.species);

  // append the component character-description and sets atributes
  pageContainer.appendChild(characterDescription);
  characterDescription.setAttribute("episodes", character.episode.length);
  characterDescription.setAttribute("status", character.status);
  characterDescription.setAttribute("species", character.species);
  characterDescription.setAttribute("gender", character.gender);
  characterDescription.setAttribute("origin", character.origin.name);
  characterDescription.setAttribute("location", character.location.name);

  return pageContainer;
};

export default CharacterPage;
