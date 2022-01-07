import { BaseComponent } from './base-component';
import { Card } from './card';
import { CardsField } from './cards-field';
import { delay } from '../../shared/delay';
import { Timer } from './timer';
import { WinMessage } from './win-message';

const FLIP_DELAY = 1000;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private readonly timer: Timer;

  private activeCard?: Card;

  private isAnimation = false;

  public winCounter = 0;

  private readonly winMessage: WinMessage;

  constructor() {
    super();
    this.timer = new Timer();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
    this.winMessage = new WinMessage();
  }

  newGame(images: string[]): void {
    this.timer.stopTimer();
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);
    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });
    this.cardsField.addCards(cards);
    this.timer.startTimer();
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;

    this.isAnimation = true;
    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) { // Если карты не совпали
      this.activeCard.showWrongSate();
      card.showWrongSate();

      await delay(FLIP_DELAY);
      await Promise.all(
        [
          this.activeCard.flipToBack(),
          card.flipToBack(),
          this.activeCard.deleteWrongSate(),
          card.deleteWrongSate(),
        ],
      );// Переворачиваем карты обратно
      this.activeCard.deleteWrongSate();
      card.deleteWrongSate();
    } else {
      this.activeCard.showRightSate();
      card.showRightSate();
      this.winCounter += 1;
      if (this.winCounter === 8) {
        this.winMessage.showWin();
      }
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }

  closeWin = (): void => {
    const winWrapper = document.querySelector('.win-popup');
    const winClose = document.querySelector('.close-button-win');

    function closeWin() {
      if (winWrapper) winWrapper.classList.remove('active');
    }

    if (winClose) {
      winClose.addEventListener('click', () => {
        closeWin();
      });
    }
  };
}
