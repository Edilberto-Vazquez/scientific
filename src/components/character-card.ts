// Class to define component attributes
class Properties {
  name: string = "";
  species: string = "";
  image: string = "";
}

// Class to define the base component of the component
abstract class BaseComponent<Properties> extends HTMLElement {
  private static _keys: any;
  private _data: Properties;

  constructor() {
    super();
    this._data = {} as Properties;
    this.attachShadow({ mode: "open" });
  }

  public get data(): Properties {
    return this._data;
  }

  public abstract getTemplate(): HTMLTemplateElement;

  public render(): void {
    this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback(): void {
    this.render();
  }

  static get observedAttributes(): any {
    return (this.constructor as any)._keys || [];
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any): void {
    if (oldValue !== newValue) {
      (this.data as any)[name] = newValue;
    }
    this.getTemplate();
  }
}

// Class to create the template
@Observes(Properties)
class CharacterCard extends BaseComponent<Properties> {
  constructor() {
    super();
  }

  getStyles(): string {
    return `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-size: 62.5%;
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
          font-size: 1.4rem;
        }
      </style>
    `;
  }

  getTemplate(): HTMLTemplateElement {
    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = `
      <article class="character-card">
        <a href="#/1/">
          <img src=${this.data.image || undefined} alt="">
          <div>
            <span>${this.data.name || undefined}</span>
            <span>${this.data.species || undefined}</span>
          </div>
        </a>
      </article>
      ${this.getStyles()}
    `;
    return template;
  }
}

type Type = new (...args: any[]) => Properties;
function Observes<Properties extends {}>(type: Type) {
  function internal(target: Object): void {
    Object.defineProperty(target.constructor, "_keys", {
      get: function (): string[] {
        const defaults = new type();
        return Object.keys(defaults);
      },
      enumerable: false,
      configurable: false,
    });
  }
  return internal;
}

customElements.define("character-card", CharacterCard);
