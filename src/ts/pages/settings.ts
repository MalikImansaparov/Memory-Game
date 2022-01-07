import { BaseComponent } from '../components/base-component';

export class Settings extends BaseComponent {
  constructor() {
    super('div', ['settings-wrapper']);
    this.element.innerHTML = `
    <h1>Settings</h1>
    <div class="setting">
      <h2>Game cards</h2>
      <div class="setting__cards-type">
         <label>select game cards type</label>
         <select>
            <option>easy</option>
            <option>middle</option>
           
          </select>
      </div>
      <div class="small-decoration-line"></div>
      <div class="setting__cards-number">
          <h2>Difficulty</h2>
          <label>select game type</label>
           <select>
              <option>Wild animals</option>
              <option>Wild predators</option>
              </select>
        </div>
      <div class="small-decoration-line"></div>
    </div>
    `;
  }
}
