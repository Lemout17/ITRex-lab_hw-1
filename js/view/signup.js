const SignUp = {
  render: () => {
    return `
       <main>
        <section class="section">
        <form class="form">
          <div class="form__title">
            <span class="form__title-text">Sign Up</span>
          </div>
          <div>
            <div class="form__input__wrapper">
              <input
                class="form__input"
                type="text"
                placeholder="First Name"
                id="name"
                autocomplete="on"
                required
              />
              <p class="error-message__name"></p>
            </div>
            <div class="form__input__wrapper">
              <input
                class="form__input"
                type="text"
                placeholder="Last Name"
                id="surname"
                autocomplete="on"
                required
              />
              <p class="error-message__surname"></p>
            </div>
            <div class="form__input__wrapper">
              <input
                class="form__input"
                type="email"
                placeholder="Email"
                id="email"
                autocomplete="on"
                required
              />
              <p class="error-message__email"></p>
            </div>
            <div class="form__input__wrapper">
              <input
                class="form__input"
                type="password"
                placeholder="Password"
                id="password"
                autocomplete 
                required
              />
              <p class="error-message__password"></p>
                <svg class="input__svg">
                <use href="./svg/sprite.svg#icon-eye-slash"></use>
              </svg>
            </div>
            <div class="form__input__wrapper">
              <input
                class="form__input"
                type="password"
                placeholder="Confirm Password"
                id="confirmPass"
                autocomplete 
                required
              />
              <p class="error-message__confirmPass"></p>
              <svg class="input__svg">
                <use href="./svg/sprite.svg#icon-eye-slash"></use>
              </svg>
            </div>
          </div>

          <button class="form__button" type="submit" data-name="/doctor">
            Sign up
            <svg class="button__svg">
              <use href="./svg/sprite.svg#icon-angle-right-b"></use>
            </svg>
          </button>

          <div class="form__textwrapper">
            <p class="form__text">Already have an account?</p>
            <a class="form__link" href="#" data-name="/signin">Sign in</a>
          </div>
        </form>
      </section>
       </main>
    `
  },
}

export default SignUp
