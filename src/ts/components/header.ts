import { BaseComponent } from './base-component';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
    this.element.innerHTML = `
      <div class="header__wrapper">
      <div class="logo">
        <div class="logo-first">Match</div>
        <div class="logo-second">Match</div>
      </div>
      <nav class="navigation">
        <a href="#About" class="navigation__link active-section about-link">
          <div class="icon-circle">
            <div>?</div>
          </div>
          <div class="link">About Game</div>
        </a>
        <a href="#Score" class="navigation__link score-link">
          <div class="icon-circle">
            <i class="fas fa-star"></i>
          </div>
          <div class="link">Best Score</div>
        </a>
        <a href="#Settings" class="navigation__link setting-link">
          <div class="icon-circle">
            <i class="fas fa-cog"></i>
          </div>
          <div class="link">Game Settings</div>
        </a>
      </nav>
      <div class="register-button">Sign up</div>
      <div class="game-buttons  playButtons button-hidden">
        <a href="#Play" class="navigation__link play-link button-hidden">
          <div class="icon-circle">
            <i class="fas fa-play"></i>
          </div>
          <div class="link">PlAY</div>
        </a>
        <button class="stop-button button-hidden">STOP</button>
      </div>
    </div>
    `;
  }

  activeRout(): void {
    const navSections = this.element.querySelectorAll('.navigation__link');
    const aboutSection = this.element.querySelector('.about-link');
    const scoreSection = this.element.querySelector('.score-link');
    const settingSection = this.element.querySelector('.setting-link');
    const playSection = this.element.querySelector('.play-link');

    function deleteActiveRout() {
      navSections.forEach((link) => link.classList.remove('active-section'));
    }

    if (aboutSection !== null && scoreSection !== null && settingSection !== null && playSection) {
      aboutSection.addEventListener('click', () => {
        deleteActiveRout();
        aboutSection.classList.add('active-section');
      });

      scoreSection.addEventListener('click', () => {
        deleteActiveRout();
        scoreSection.classList.add('active-section');
      });

      settingSection.addEventListener('click', () => {
        deleteActiveRout();
        settingSection.classList.add('active-section');
      });

      playSection.addEventListener('click', () => {
        deleteActiveRout();
        playSection.classList.add('active-section');
      });
    }
  }
}
