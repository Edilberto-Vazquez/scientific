// Class to create the character-card component
class CharacterCard extends HTMLElement {
  protected _characterid: any;
  protected _image: any;
  protected _name: any;
  protected _species: any;
  protected _observer: MutationObserver;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._observer = new MutationObserver((mutations) =>
      this.onDomChanged(mutations)
    );
  }

  // Gets the characterid attribute
  public get characterid(): number {
    return this._characterid;
  }

  // Sets the characterid attibute
  public set characterid(val: number) {
    this._characterid = val;
  }

  // Gets the image attribute
  public get image(): string {
    return this._image;
  }

  // Sets the image attibute
  public set image(val: string) {
    this._image = val;
  }

  // Gets the image attribute
  public get name(): string {
    return this._name;
  }

  // Sets the image attibute
  public set name(val: string) {
    this._name = val;
  }

  // Gets the image attribute
  public get species(): string {
    return this._species;
  }

  // Sets the image attibute
  public set species(val: string) {
    this._species = val;
  }

  // Gets the styles
  protected getStyles(): string {
    return `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        :host {
          width: 300px;
          display: inline-grid;
        }
        .character-card {
          width: 300px;
          height: 380px;
          background: #fcfcfc;
          border-radius: 10px;
          box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
        }
        .character-card a {
          width: 100%
          height: 100%;
          display: grid;
          grid-template-rows: 300px 80px;
          text-decoration: none;
          color: black;
        }
        .character-card a img {
          width: 300px;
          height: auto;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .character-card a div {
          width: 100%;
          height: 100%;
          padding: 0 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .character-card a div span {
          font-size: 24px;
        }
      </style>
    `;
  }

  // Gets the template
  protected getTemplate(): HTMLTemplateElement {
    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = `
      <article class="character-card">
        <a href="#/${this.characterid || undefined}/">
          <img src=${this.image || undefined} alt="">
          <div>
            <span>${this.name || undefined}</span>
            <span>${this.species || undefined}</span>
          </div>
        </a>
      </article>
      ${this.getStyles()}
    `;
    return template;
  }

  // Renders the component and append the template

  protected render(): void {
    this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(true));
  }

  // Called when the element's light DOM has changed.

  protected onDomChanged(mutations: MutationRecord[]): void {
    if (!this.shadowRoot) {
      return;
    }
  }

  // Called when the element is connected to the DOM tree.

  public connectedCallback(): void {
    this._observer.observe(this, {
      attributes: true,
      characterData: true,
      subtree: true,
      childList: true,
    });
    this.render();
  }

  // Gets the attributes we want to observe on the host

  static get observedAttributes(): string[] {
    return ["characterid", "image", "name", "species"];
  }

  // Called when an attribute on the host has changed.

  public attributeChangedCallback(
    name: string,
    oldValue: any,
    newValue: any
  ): void {
    if (name === "characterid") {
      this.characterid = newValue;
    }
    if (name === "image") {
      this.image = newValue;
    }
    if (name === "name") {
      this.name = newValue;
    }
    if (name === "species") {
      this.species = newValue;
    }
  }

  // Called when the element is disconnected from the DOM tree.

  public disconnectedCallback(): void {
    this._observer.disconnect();
  }
}

customElements.define("character-card", CharacterCard);
