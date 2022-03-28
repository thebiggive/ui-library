import { html, TemplateResult } from 'lit';
import '../src/ui-library.js';

export default {
  title: 'UiLibrary',
  component: 'ui-library',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <ui-library style="--ui-library-background-color: ${backgroundColor}" .title=${title}></ui-library>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
