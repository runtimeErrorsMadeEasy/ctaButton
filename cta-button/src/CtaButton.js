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
        transition-duration: 0.5s;
        --psu-foreground-color: white;
        --psu-background-color: #003087;
      }
      .ctaIcon:hover,
      .ctaIcon:focus,
      .ctaIcon:active {
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
      :host([disabled]) .ctaButton:active,
      :host([disabled]) .ctaButton:hover {
        cursor: not-allowed;
        background-color: transparent;
        color: transparent;
        border: transparent;
        box-shadow: none;
      }

      :host([disabled]) .ctaIcon:hover,
      :host([disabled]) .ctaIcon:active {
        cursor: not-allowed;
        background-color: transparent;
        color: transparent;
      }

      :host([michiganSucks]) .ctaButton {
        background-color: #00274c;
        color: #ffcb05;
        border: 2px solid #ffcb05;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      invert: { type: Boolean, reflect: true },
      link: { type: String },
      icon: { type: String },
      disabled: { type: Boolean, reflect: true },
      michiganSucks: { type: Boolean, relfect: true },
    };
  }

  constructor() {
    super();
    this.title = 'Penn State Hockey';
    this.invert = false;
    this.link =
      'https://gopsusports.com/sports/mens-ice-hockey/schedule/2021-22';
    this.icon = 'save';
    this.disabled = false;
    this.michiganSucks = true;
  }

  _myLink() {
    window.open(this.link);
  }

  render() {
    return html`
      <a>
        <span tabIndex="-1">
          <button
            class="ctaButton"
            ?michiganSucks=${this.michiganSucks}
            link=${this.link}
            ?disabled=${this.disabled}
            @click="${this._myLink}"
          >
            <simple-icon-lite
              class="ctaIcon"
              icon=${this.icon}
            ></simple-icon-lite>
            ${this.title}
          </button>
        </span>
      </a>
    `;
  }
}

// ?disabled="${this._disable}
// onclick="this.disabled = true;"
