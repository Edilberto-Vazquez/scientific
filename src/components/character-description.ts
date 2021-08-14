class CharacterDescription extends HTMLElement {
  protected _episodes: any;
  protected _status: any;
  protected _species: any;
  protected _gender: any;
  protected _origin: any;
  protected _location: any;
  protected _observer: MutationObserver;

  public constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._observer = new MutationObserver((mutations) => {
      this.onDomChanged(mutations);
    });
  }

  public get episodes(): any {
    return this._episodes;
  }

  public set episodes(value: any) {
    this._episodes = value;
  }

  public get status(): any {
    return this._status;
  }

  public set status(value: any) {
    this._status = value;
  }

  public get species(): any {
    return this._species;
  }

  public set species(value: any) {
    this._species = value;
  }

  public get gender(): any {
    return this._gender;
  }

  public set gender(value: any) {
    this._gender = value;
  }

  public get origin(): any {
    return this._origin;
  }

  public set origin(value: any) {
    this._origin = value;
  }

  public get location(): any {
    return this._location;
  }

  public set location(value: any) {
    this._location = value;
  }

  protected getTemplate(): HTMLTemplateElement {
    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = `
      <article class="Characters-card">
        <h3>Episodes:${this.episodes}</h3>
        <h3>Status:${this.status}</h3>
        <h3>Species:${this.species}</h3>
        <h3>Gender:${this.gender}</h3>
        <h3>Origin:${this.origin}</h3>
        <h3>Last Location:${this.location}</h3>
      </article>
    `;
    return template;
  }

  protected render(): void {
    this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(true));
  }

  protected onDomChanged(muataion: MutationRecord[]): void {
    if (!this.shadowRoot) {
      return;
    }
  }

  public connectedCallback(): void {
    this._observer.observe(this, {
      attributes: true,
      characterData: true,
      subtree: true,
      childList: true,
    });
    this.render();
  }

  public static get observedAttributes(): string[] {
    return ["episodes", "status", "species", "gender", "origin", "location"];
  }

  public attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    if (name === "episodes") {
      this.episodes = newValue;
    }
    if (name === "status") {
      this.status = newValue;
    }
    if (name === "species") {
      this.species = newValue;
    }
    if (name === "gender") {
      this.gender = newValue;
    }
    if (name === "origin") {
      this.origin = newValue;
    }
    if (name === "location") {
      this.location = newValue;
    }
  }
}

customElements.define("character-description", CharacterDescription);
