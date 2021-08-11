class CharacterDescription extends HTMLElement {
  protected characterEpisodes?: string;
  protected characterStatus?: string;
  protected characterSpecies?: string;
  protected characterGender?: string;
  protected characterOrigin?: string;
  protected characterLastLocation?: string;
  protected shadow: ShadowRoot;

  public constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  protected getTemplate(): HTMLTemplateElement {
    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = `
      <article class="Characters-card">
        <h3>Episodes:${this.characterEpisodes}</h3>
        <h3>Status:${this.characterStatus}</h3>
        <h3>Species:${this.characterSpecies}</h3>
        <h3>Gender:${this.characterGender}</h3>
        <h3>Origin:${this.characterOrigin}</h3>
        <h3>Last Location:${this.characterLastLocation}</h3>
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
    return [
      "characterEpisodes",
      "characterStatus",
      "characterSpecies",
      "characterGender",
      "characterOrigin",
      "characterLastLocation",
    ];
  }

  public attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    if (name === newValue) {
      this.characterEpisodes = newValue;
    }
    if (name === newValue) {
      this.characterStatus = newValue;
    }
    if (name === newValue) {
      this.characterSpecies = newValue;
    }
    if (name === newValue) {
      this.characterGender = newValue;
    }
    if (name === newValue) {
      this.characterOrigin = newValue;
    }
    if (name === newValue) {
      this.characterLastLocation = newValue;
    }
  }
}

customElements.define("character-description", CharacterDescription);
