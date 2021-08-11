class HeaderMain extends HTMLElement {
  protected shadow: ShadowRoot;

  public constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  protected getTemplate(): HTMLTemplateElement {
    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = `
      <div class="header">
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
      </div>
    `;
    return template;
  }

  protected render(): void {
    this.shadow.appendChild(this.getTemplate().content.cloneNode(true));
  }

  public connectedCallback(): void {
    this.render();
  }
}

customElements.define("header-main", HeaderMain);
