import "../components/character-card.ts";
import "../components/character-description.ts";

const CharacterPage = (): HTMLDivElement => {
  const pageContainer: HTMLDivElement = document.createElement("div");
  const characterCard: HTMLElement = document.createElement("character-card");
  const characterDescription: HTMLElement = document.createElement(
    "character-description"
  );
  pageContainer.classList.add("character-page");
  pageContainer.appendChild(characterCard);
  pageContainer.appendChild(characterDescription);
  return pageContainer;
};

export default CharacterPage;
