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
  },
};

function Template({
  title = 'Ice Arena',
  textColor,
  invert = false,
  link = 'https://static.gopsusports.com/custompages/pegula/pegula-ice-arena.html',
  icon = 'communication:location-on',
  disabled = true,
}) {
  return html`
    <cta-button
      style="--cta-button-text-color: ${textColor || 'white'}"
      .title=${title}
      .invert=${invert}
      .link=${link}
      .icon=${icon}
    >
    </cta-button>

    <cta-button
      style="--cta-button-text-color: ${textColor || 'white'}"
      title="Schedule"
      .invert=${invert}
      link="https://gopsusports.com/sports/mens-ice-hockey/schedule/2021-22"
      icon="schedule"
    >
    </cta-button>

    <cta-button
      style="--cta-button-text-color: ${textColor || 'white'}"
      title="Roster"
      .invert=${invert}
      link="https://gopsusports.com/sports/mens-ice-hockey/roster"
      icon="subject"
    >
    </cta-button>

    <cta-button
      title="Michigan Hockey"
      .invert=${invert}
      icon="clear"
      .disabled=${disabled}
    >
    </cta-button>
  `;
}

export const Regular = Template.bind({});
