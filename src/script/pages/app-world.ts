import { LitElement, css, html, customElement, property } from 'lit-element';

import '@vaadin/vaadin-date-picker';

@customElement('app-world')
export class AppAbout extends LitElement {

  @property() message = 'Welcome!';

  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>World</h2>
        <fast-card>
            <h3>Card title</h3>
            <fast-text-field appearance="filled" value="${this.message}">Name</fast-text-field>
            <fast-text-area appearance="filled" spellcheck>Description</fast-text-area>
            <fast-button @click="${this.addSpace}">Add</fast-button>
        </fast-card>

        <vaadin-date-picker value="1990-01-28"></vaadin-date-picker>

      </div>
    `;
  }

  addSpace() {
    console.log("test " + this.message);
  }
}