import { html, css, LitElement } from 'lit';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--cta-button-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      myBool: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.myBool = false;
  }

  _disable() {
    document.getElementById('testButton').onclick = this.myBool;
  }

  render() {
    return html`
      <button id="testButton" ?disabled="${this.myBool}">test</button>
    `;
  }
}

// ?disabled="${this._disable}
