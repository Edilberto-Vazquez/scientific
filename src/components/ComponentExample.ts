// Old form
// Class to define component attributes
// class Properties {
//   name: string = "";
//   species: string = "";
//   image: string = "";
// }

// Class to define the base component of the component
// abstract class BaseComponent<Properties> extends HTMLElement {
//   private static _keys: any;
//   private _data: Properties;

//   constructor() {
//     super();
//     this._data = {} as Properties;
//     this.attachShadow({ mode: "open" });
//   }

//   public get data(): Properties {
//     return this._data;
//   }

//   public abstract getTemplate(): HTMLTemplateElement;

//   public render(): void {
//     this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(true));
//   }

//   connectedCallback(): void {
//     this.render();
//   }

//   static get observedAttributes(): any {
//     return (this.constructor as any)._keys || [];
//   }

//   attributeChangedCallback(name: string, oldValue: any, newValue: any): void {
//     if (oldValue !== newValue) {
//       (this.data as any)[name] = newValue;
//     }
//     this.getTemplate();
//   }
// }

// Class to create the template
// @Observes(Properties)
// class CharacterCard extends BaseComponent<Properties> {
//   constructor() {
//     super();
//   }

//   getStyles(): string {
//     return `
//       <style>
//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//           font-size: 62.5%;
//         }
//         .character-card {
//           width: 300px;
//           height: 380px;
//           background: #fcfcfc;
//           border-radius: 10px;
//           box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
//         }
//         .character-card a {
//           width: 100%
//           height: 100%;
//           display: grid;
//           grid-template-rows: 300px 80px;
//           text-decoration: none;
//           color: black;
//         }
//         .character-card a img {
//           width: 300px;
//           height: auto;
//           border-top-left-radius: 10px;
//           border-top-right-radius: 10px;
//         }
//         .character-card a div {
//           width: 100%;
//           height: 100%;
//           padding: 0 14px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }
//         .character-card a div span {
//           font-size: 1.4rem;
//         }
//       </style>
//     `;
//   }

//   getTemplate(): HTMLTemplateElement {
//     const template: HTMLTemplateElement = document.createElement("template");
//     template.innerHTML = `
//       <article class="character-card">
//         <a href="#/1/">
//           <img src=${this.data.image || undefined} alt="">
//           <div>
//             <span>${this.data.name || undefined}</span>
//             <span>${this.data.species || undefined}</span>
//           </div>
//         </a>
//       </article>
//       ${this.getStyles()}
//     `;
//     return template;
//   }
// }

// type Type = new (...args: any[]) => Properties;
// function Observes<Properties extends {}>(type: Type) {
//   function internal(target: Object): void {
//     Object.defineProperty(target.constructor, "_keys", {
//       get: function (): string[] {
//         const defaults = new type();
//         return Object.keys(defaults);
//       },
//       enumerable: false,
//       configurable: false,
//     });
//   }
//   return internal;
// }

// customElements.define("character-card", CharacterCard);

// New way adding a MutationObserver
class ExampleComponent extends HTMLElement {
  private _observer: MutationObserver;
  private _image: string;
  private _name: string;
  private _species: string;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._observer = new MutationObserver((mutations) =>
      this.onDomChanged(mutations)
    );
    this._image = "";
    this._name = "";
    this._species = "";
  }

  public get image(): string {
    return this._image;
  }

  public set image(val: string) {
    this._image = val;
  }
  public get name(): string {
    return this._name;
  }

  public set name(val: string) {
    this._name = val;
  }
  public get species(): string {
    return this._species;
  }

  public set species(val: string) {
    this._species = val;
  }

  public render(): void {
    this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(true));
  }

  static get observedAttributes(): string[] {
    return ["image", "name", "species"];
  }

  public attributeChangedCallback(
    name: string,
    oldValue: any,
    newValue: any
  ): void {
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

  public connectedCallback(): void {
    this._observer.observe(this, {
      attributes: true,
      characterData: true,
      subtree: true,
      childList: true,
    });
    this.render();
  }

  public disconnectedCallback(): void {
    this._observer.disconnect();
  }

  public onDomChanged(mutations: MutationRecord[]): void {
    console.log(mutations);
    if (!this.shadowRoot) {
      return;
    }
    this.render();
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
          <img src=${this.image || undefined} alt=${
      this.name || "character name"
    }>
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
}

customElements.define("example-component", ExampleComponent);
