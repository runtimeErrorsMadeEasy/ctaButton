/* eslint-disable */
import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        border-radius: 24px;
        padding: 12px 50px;
        --psu-foreground-color: white;
        --psu-background-color: #003087;
      }
      .ctaIcon {
        color: var(--psu-foreground-color);
        transition-duration: 0.5s;
      }
      .ctaButton {
        border-radius: 24px;
        padding: 12px 50px;
        color: var(--psu-foreground-color);
        background-color: var(--psu-background-color);
        border: 2px solid var(--psu-foreground-color);
        transition-duration: 0.5s;
        font-family: impact;
        font-size: large;
      }
      .ctaButton:hover {
        border-radius: 24px;
        --psu-foreground-color: #003087;
        --psu-background-color: white;
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
          0 17px 50px 0 rgba(0, 0, 0, 0.19);
      }
      :host([invert]) .ctaButton:hover,
      :host([invert]) .ctaButton:focus {
        --psu-foreground-color: #003087;
        --psu-background-color: white;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      invert: { type: Boolean, reflect: true },
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Penn State Hockey';
    this.invert = false;
    this.link =
      'https://gopsusports.com/sports/mens-ice-hockey/schedule/2021-22';
    this.icon = 'save';
  }

  _myLink() {
    window.open(
      'https://gopsusports.com/sports/mens-ice-hockey/schedule/2021-22'
    );
  }

  render() {
    return html`
      <span href="${this.link}" tabIndex="-1">
        <button class="ctaButton" id="testButton" @click="${this._myLink}">
          <simple-icon-lite
            class="ctaIcon"
            icon=${this.icon}
          ></simple-icon-lite>
          ${this.title}
        </button>
      </span>
    `;
  }
}

// ?disabled="${this._disable}
// onclick="this.disabled = true;"
