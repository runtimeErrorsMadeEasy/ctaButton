import { html } from 'lit';
import '../cta-button.js';

export default {
  title: 'CtaButton',
  component: 'cta-button',
  argTypes: {
    title: { control: 'text' },
    textColor: { control: 'color' },
    invert: { control: 'boolean' },
    link: { control: 'text' },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
    michiganSucks: { control: 'boolean' },
  },
};

function Template({
  title = 'Ice Arena',
  textColor,
  slot,
  invert = false,
  link = 'https://static.gopsusports.com/custompages/pegula/pegula-ice-arena.html',
  icon = 'communication:location-on',
  disabled = false,
  michiganSucks = false,
}) {
  return html`
    <cta-button
      style="--cta-button-text-color: ${textColor || 'white'}"
      .title=${title}
      .invert=${invert}
      .link=${link}
      .icon=${icon}
      .disabled=${disabled}
      .michiganSucks=${michiganSucks}
    >
      ${slot}
    </cta-button>

    <cta-button
      style="--cta-button-text-color: ${textColor || 'white'}"
      .title=${title}
      .invert=${invert}
      .link=${link}
      .icon=${icon}
      .disabled=${disabled}
      .michiganSucks=${michiganSucks}
    >
      ${slot}
    </cta-button>

    <cta-button
      style="--cta-button-text-color: ${textColor || 'white'}"
      .title=${title}
      .invert=${invert}
      .link=${link}
      .icon=${icon}
      .disabled=${disabled}
      .michiganSucks=${michiganSucks}
    >
      ${slot}
    </cta-button>

    <cta-button
      style="--cta-button-text-color: ${textColor || 'white'}"
      .title=${title}
      .invert=${invert}
      .icon=${icon}
      ?disabled="${disabled}"
      .michiganSucks=${michiganSucks}
    >
      ${slot}
    </cta-button>
  `;
}

export const Regular = Template.bind({});
