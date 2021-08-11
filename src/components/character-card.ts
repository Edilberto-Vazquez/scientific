class CharacterCard extends HTMLElement {
  protected characterImg?: string;
  protected characterName?: string;
  protected characterRace?: string;
  protected shadow: ShadowRoot;
  public constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  protected getTemplate(): HTMLTemplateElement {
    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = `
      <article class="character-card">
        <a href="#/1">
          <img src="image" alt="name">
        </a>
        <h2>Character Name</h2>
      </article>
    `;
    return template;
  }

  protected render(): void {
    this.shadow.appendChild(this.getTemplate().content.cloneNode(true));
  }

  public connectedCallback(): void {
    this.render();
  }

  public static get observedAttributes(): string[] {
    return ["characterImg", "characterName", "characterRace"];
  }

  public attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    if (name === newValue) {
      this.characterImg = newValue;
    }
    if (name === newValue) {
      this.characterName = newValue;
    }
    if (name === newValue) {
      this.characterRace = newValue;
    }
  }
}

customElements.define("character-card", CharacterCard);
