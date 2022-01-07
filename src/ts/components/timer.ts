import { BaseComponent } from './base-component';

export class Timer extends BaseComponent {
  private timer: ReturnType <typeof setTimeout>;

  constructor() {
    super('div', ['timer']);
    this.element.innerHTML = `
      <div class="timer__output">0:00</div>
    `;
    this.timer = setInterval(() => {}, 1000);
  }

  startTimer(): void {
    const timerOutput: null | HTMLElement = document.querySelector('.timer__output');
    let secInHour = 3600;
    const oneSecond = 1;
    const milisecInSec = 1000;
    const secInMin = 60;

    this.timer = setInterval(() => {
      const min = (secInHour / secInMin) % secInMin;
      const sec = (secInHour % secInMin).toLocaleString('en', { minimumIntegerDigits: 2 });
      if (timerOutput) {
        timerOutput.innerHTML = `${Math.trunc(min)}:${sec}`;
      }
      secInHour += oneSecond;
    }, milisecInSec);
  }

  stopTimer(): void {
    clearInterval(this.timer);
  }
}
