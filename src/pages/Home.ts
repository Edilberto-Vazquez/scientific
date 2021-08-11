import "../components/character-card.ts";

const HomePage = (): HTMLDivElement => {
  const pageContainer: HTMLDivElement = document.createElement("div");
  const characterCard: HTMLElement = document.createElement("character-card");
  pageContainer.classList.add("home-page");
  pageContainer.appendChild(characterCard);
  return pageContainer;
};

export default HomePage;
