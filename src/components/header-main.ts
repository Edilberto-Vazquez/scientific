class HeaderMain extends HTMLElement {
  private _observer: MutationObserver;
  public constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._observer = new MutationObserver((mutations) =>
      this.onDomChanged(mutations)
    );
  }

  /**
   *
   * @CustomProperties {--header-width}
   */
  protected getStyles(): string {
    return `
      <style>
        :host {
          --header-width: 0;
          width: 100%;
          height: 68px;
          display: grid;
        }
        .header-main {
          width: var(--header-width);
          height: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          background: white;
        }
        .header-logo a, .header-nav a {
          font-size: 3.6rem;
          text-decoration: none;
          color: #15302c;
        }
      </style>
    `;
  }

  protected getTemplate(): HTMLTemplateElement {
    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = `
      <header class="header-main">
        <div class="header-logo">
          <h1>
            <a href="/">
              100tifi.co
            </a>
          </h1>
        </div>
        <div class="header-nav">
          <a href="#/about/">
            About
          </a>
        </div>
      </header>
      ${this.getStyles()}
    `;
    return template;
  }

  protected render(): void {
    this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(true));
  }

  protected onDomChanged(mutations: MutationRecord[]): void {
    if (!this.shadowRoot) {
      return;
    }
  }

  public connectedCallback(): void {
    this.render();
  }

  public disconnectedCallback(): void {
    this._observer.disconnect();
  }
}

customElements.define("header-main", HeaderMain);
