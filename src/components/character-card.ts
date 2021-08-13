class Properties {
  name: string = "";
  species: string = "";
  image: string = "";
}

abstract class BaseComponent<Properties> extends HTMLElement {
  public static _keys: any;
  private _data: Properties;

  constructor() {
    super();
    this._data = {} as Properties;
    this.attachShadow({ mode: "open" });
  }
  public get data() {
    return this._data;
  }
  static get observedAttributes() {
    return (this.constructor as any)._keys || [];
  }
  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (oldValue !== newValue) {
      (this.data as any)[name] = newValue;
    }
    this.render();
  }

  public abstract render(): void;
}

@Observes(Properties)
class CharacterCard extends BaseComponent<Properties> {
  constructor() {
    super();
  }

  render() {
    let template = document.createElement("template");
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
    `;
    return template;
  }

  connectedCallback() {
    this.shadowRoot?.appendChild(this.render().content.cloneNode(true));
  }
}

type Type = new (...args: any[]) => Properties;
function Observes<Properties extends {}>(type: Type) {
  // the original decorator
  function internal(target: Object): void {
    Object.defineProperty(target.constructor, "_keys", {
      get: function () {
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
