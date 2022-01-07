import { BaseComponent } from '../components/base-component';

export class About extends BaseComponent {
  constructor() {
    super('div', ['about-game']);
    this.element.innerHTML = `
      <h1>How to play?</h1>
      <div class="rule">
        <div class="rule__circle">1</div>
        <div class="rule__text">Register new player in game</div>
        <div class="rule__image first"></div>
      </div>
      <div class="rule" id="little-section">
        <div class="rule__circle">2</div>
        <div class="rule__text">Configure your game settings</div>
        <div class="rule__image second"></div>
      </div>
      <div class="rule">
        <div class="rule__circle">3</div>
        <div class="rule__text">Start you new game!<br/> 
        Remember card positions and <br/> match it before times up.
        </div>
        <div class="rule__image third"></div>
      </div>
    `;
  }
}
