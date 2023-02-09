import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('name-tag')
export class NameTag extends LitElement {
  @property()
  name: string = 'Tu nombre aquí por favor';

  render() {
    return html`
      <p>Hola, ${this.name}</p>
      <input @input=${this.changeName} placeholder="escribe tu nombre">
    `;
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
}
