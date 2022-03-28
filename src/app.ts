import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class App extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
  `;

  render() {
    return html`
      <main>
        <h1>Hello World</h1>
      </main>
    `;
  }
}
