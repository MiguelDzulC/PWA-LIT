import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  message: string = 'Hola Mundooo.';

  render() {
    return html`
      <p>${this.message}</p>
    `;
  }
}
