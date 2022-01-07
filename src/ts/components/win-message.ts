import { BaseComponent } from './base-component';

export class WinMessage extends BaseComponent {
  constructor() {
    super('div', ['win-popup']);
    this.element.innerHTML = `
    <div class="win-content">
      <div class="close-button-win">
          <i class="fas fa-times"></i>
      </div>
      <p class="win-content__title">
          Congratulations! You  found all matches!
          But unfortunately, you lost the time of the record
       </p>
      <a class="win-content__button" href="#Score">OK</a>
    </div>
    `;
  }

  showWin = () : void => {
    const winWrapper = document.querySelector('.win-popup');
    const winClose = document.querySelector('.close-button-win');
    const okButton = document.querySelector('.win-content__button');

    if (winWrapper) winWrapper.classList.add('active');

    function closeWin() {
      if (winWrapper) winWrapper.classList.remove('active');
    }

    if (winClose && okButton) {
      winClose.addEventListener('click', closeWin);
      okButton.addEventListener('click', closeWin);
    }
  };
}
