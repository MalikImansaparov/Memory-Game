import './styles.scss';
import { App } from './ts/app';

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');
  new App(appElement).routing();
  new App(appElement).registrPopup();
  new App(appElement).startGame();
};
