import { BaseComponent } from '../components/base-component';

export class Score extends BaseComponent {
  constructor() {
    super('div', ['score-wrapper']);
    this.element.innerHTML = `
      <h1>Best Record</h1>
      <div class="score-top">
        <div class="player-score">
         <div class="player-score__image"></div>
         <div class="player-score__description">
            <div class="name">Malik Imansaparov</div>
            <div class="email">ImansaparovDev@gmail.com</div>
         </div>
         <div class="player-score__result">Time: <span class="result-number">34</span></div>
        </div>
        <div class="decoration-line"></div>
    `;
  }
}
