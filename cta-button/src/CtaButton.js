import { html, css, LitElement } from 'lit';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      .ctaButton {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        border-radius: 24px;
        padding: 12px 50px;
        color: white;
        background-color: navy;
        border: 2px solid white;
        transition-duration: 0.5s;
        font-family: impact;
      }
      .ctaButton:hover {
        border-radius: 24px;
        color: navy;
        background-color: white;
        border: 2px solid navy;
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
          0 17px 50px 0 rgba(0, 0, 0, 0.19);
      }
    `;
  }

  // static get properties() {
  // return {
  //  };
  // }

  // constructor() {
  //  super();
  // }

  render() {
    return html`
      <button class="ctaButton" id="testButton">Penn State Hockey</button>
    `;
  }
}

// ?disabled="${this._disable}
// onclick="this.disabled = true;"
