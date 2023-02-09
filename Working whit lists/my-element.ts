import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  items = new Set(['Objeto 1', 'Objeto 2', 'Objeto 3', 'Objeto 4'])

  render() {
    return html`
      <p>Mis cosas</p>
      <ul>
        ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}
