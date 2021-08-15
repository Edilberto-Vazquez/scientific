class Error404 extends HTMLElement {
  protected _observer: MutationObserver;
  public constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._observer = new MutationObserver((mutations) => {
      this.onDomChanged(mutations);
    });
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
    this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(true));
  }

  protected onDomChanged(muataion: MutationRecord[]): void {
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

customElements.define("error-404", Error404);
