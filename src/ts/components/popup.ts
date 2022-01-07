import { BaseComponent } from './base-component';

export class Popup extends BaseComponent {
  constructor() {
    super('div', ['popup']);
    this.element.innerHTML = `
    <div class="popup-content">
      <div class="close-button">
        <i class="fas fa-times"></i>
      </div>
      <div class="title-wrapper">
        <h2>Registr new Player</h2>
      </div>
    <div class="two-column">
      <div class="form">
        <p class="label"> <span class="blue">*</span> First Name</p>
        <input  class="name colortext" type="text" name="first-name" pattern="[A-Za-zА-Яа-я]+"
         minlength="1" maxlength="10" required placeholder=" Enter your first name">
        <p class="label"> <span class="blue">*</span> Last Name</p>
        <input  class="name-last colortext" type="text" name="last-name"
         pattern="[A-Za-zА-Яа-я]+"
         minlength="1" maxlength="10" required placeholder=" Enter your last name">
       <p class="label"><span class="blue">*</span> Email</p>
       <input  class="email colortext" type="email" name="email" required placeholder=" Enter your email">
     </div>
     <div class="avatar-img"></div>
    </div>
    <div class="buttons">
        <button type="submit" class="add-button button-hidden">Add user</button>
        <button class="cancel-button">Cancel</button>
     </div>
    `;
  }

  showPopup = (): void => {
    const cancelButton = document.querySelector('.cancel-button');
    const nameInput: HTMLInputElement | null = document.querySelector('.name');
    const lastNameInput: HTMLInputElement | null = document.querySelector('.name-last');
    const emailInput: HTMLInputElement | null = document.querySelector('.email');
    const registrButton = document.querySelector('.register-button');
    const closeButton = document.querySelector('.close-button');
    const popupWrapper = document.querySelector('.popup');
    const addButton = document.querySelector('.add-button');
    const stopButton = document.querySelector('.stop-button');
    const playButtons = document.querySelector('.game-buttons');

    function showHiddenItems() {
      if (stopButton) {
        stopButton.classList.remove('button-hidden');
        stopButton.addEventListener('click', () => {
          // eslint-disable-next-line no-alert
          alert('The game is paused, click OK to continue');
        });
      }
      if (playButtons) playButtons.classList.remove('button-hidden');
    }

    function clearInputs() {
      if (nameInput && lastNameInput && emailInput) {
        nameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
      }
    }

    function openPopup() {
      if (popupWrapper) popupWrapper.classList.add('active');
      document.body.classList.add('notScrollable');
    }

    function closePopup() {
      if (popupWrapper) popupWrapper.classList.remove('active');
      document.body.classList.remove('notScrollable');
    }

    function validate() {
      if (nameInput && lastNameInput && emailInput && addButton) {
        if (nameInput.validity.valid && lastNameInput.validity.valid && emailInput.validity.valid) {
          addButton.classList.remove('button-hidden');
        } else {
          addButton.classList.add('button-hidden');
        }
      }
    }

    function cancelPopup() {
      clearInputs();
      closePopup();
    }

    if (registrButton) registrButton.addEventListener('click', openPopup);

    if (closeButton) closeButton.addEventListener('click', closePopup);

    if (cancelButton) cancelButton.addEventListener('click', cancelPopup);

    if (nameInput && lastNameInput && emailInput && addButton) {
      nameInput.addEventListener('input', validate);
      lastNameInput.addEventListener('input', validate);
      emailInput.addEventListener('input', validate);
    }

    if (addButton) {
      addButton.addEventListener('click', () => {
        showHiddenItems();
        closePopup();
      });
    }
  };
}
