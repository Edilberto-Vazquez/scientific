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

  public get episodes(): number {
    return this._episodes;
  }

  public set episodes(value: number) {
    this._episodes = value;
  }

  public get status(): string {
    return this._status;
  }

  public set status(value: string) {
    this._status = value;
  }

  public get species(): string {
    return this._species;
  }

  public set species(value: string) {
    this._species = value;
  }

  public get gender(): string {
    return this._gender;
  }

  public set gender(value: string) {
    this._gender = value;
  }

  public get origin(): string {
    return this._origin;
  }

  public set origin(value: string) {
    this._origin = value;
  }

  public get location(): string {
    return this._location;
  }

  public set location(value: string) {
    this._location = value;
  }

  protected getStyles(): string {
    return `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        :host {
          max-width: 500px;
        }
        .character-description{
          display: grid;
          row-gap: 24px;
          animation: fade 2s linear;
        }
        .character-description span {
          font-size: 2.4rem;
          font-weight: 400;
          text-align: left;
        }
        @keyframes fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      </style>
    `;
  }

  protected getTemplate(): HTMLTemplateElement {
    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = `
      <article class="character-description">
        <span>Episodes:${this.episodes}</span>
        <span>Status:${this.status}</span>
        <span>Species:${this.species}</span>
        <span>Gender:${this.gender}</span>
        <span>Origin:${this.origin}</span>
        <span>Last Location:${this.location}</span>
      </article>
      ${this.getStyles()}
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
    oldValue: any,
    newValue: any
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

  public disconnectedCallback(): void {
    this._observer.disconnect();
    this.episodes = 0;
    this.status = "";
    this.species = "";
    this.gender = "";
    this.origin = "";
    this.location = "";
  }
}

customElements.define("character-description", CharacterDescription);
