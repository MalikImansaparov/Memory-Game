import { BaseComponent } from './base-component';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  isFlipped = false;

  constructor(readonly image: string) {
    super('div', ['card-container']);
    this.element.innerHTML = `
    <div class="card">
          <div class="card__front" style="background-image:url('images/${image}')"></div>
          <div class="card__back"></div>
          <div class="state state-right none-state"></div>
          <div class="state state-wrong none-state"></div>
      </div>
    `;
  }

  flipToBack(): Promise<void> {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront(): Promise<void> {
    this.isFlipped = false;
    return this.flip(false);
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }

  showRightSate(): void {
    this.element.querySelector('.state-right')?.classList.remove('none-state');
  }

  showWrongSate(): void {
    this.element.querySelector('.state-wrong')?.classList.remove('none-state');
  }

  deleteWrongSate(): void {
    this.element.querySelector('.state-wrong')?.classList.add('none-state');
  }
}
