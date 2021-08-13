class Error404 extends HTMLElement {
  protected shadow: ShadowRoot;

  public constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  protected getTemplate(): HTMLTemplateElement {
    const template: HTMLTemplateElement = document.createElement("template");
    template.innerHTML = `
      <div class="Error404">
        <h2>Error 404</h2>
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

customElements.define("error-404", Error404);
