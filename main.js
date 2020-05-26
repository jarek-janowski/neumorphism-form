const darkTheme = document.querySelector('.dark-theme--js');

darkTheme.addEventListener('click', () => {
    const darkHeading = document.querySelector('.main__heading--js')
    const darkBody = document.querySelector('.body--js');
    const darkMain = document.querySelector('.main--js');
    const darkFirstName = document.querySelector('.form__input--first-name-js');
    const darkLastName = document.querySelector('.form__input--last-name-js');
    const darkPhone = document.querySelector('.form__input--phone-js');
    const darkEmail = document.querySelector('.form__input--email-js');
    const darkPassword = document.querySelector('.form__input--password-js');
    const darkStory = document.querySelector('.form__input--story-js');
    const darkFieldSet = document.querySelector('.fieldset--js')
    const darkStreet = document.querySelector('.form__input--street-js');
    const darkCity = document.querySelector('.form__input--city-js');
    const darkPostalCode = document.querySelector('.form__input--postal-code-js');
    const darkSubmit = document.querySelector('.submit__button--js')

    darkHeading.classList.toggle('main__heading--dark-background');
    darkBody.classList.toggle('body--dark-background');
    darkMain.classList.toggle('main--dark-background');
    darkFirstName.classList.toggle('form__input--dark-input');
    darkLastName.classList.toggle('form__input--dark-input');
    darkPhone.classList.toggle('form__input--dark-input');
    darkEmail.classList.toggle('form__input--dark-input');
    darkPassword.classList.toggle('form__input--dark-input');
    darkStory.classList.toggle('form__input--dark-input');
    darkFieldSet.classList.toggle('fieldset--dark-background')
    darkStreet.classList.toggle('form__input--dark-input');
    darkCity.classList.toggle('form__input--dark-input');
    darkPostalCode.classList.toggle('form__input--dark-input');
    darkSubmit.classList.toggle('submit__button--dark-background')
})