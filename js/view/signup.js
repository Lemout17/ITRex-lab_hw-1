const SignUp = {
  render: () => {
    return `
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
                autocomplete="on"
                required
              />
            </div>
            <div class="form__input__wrapper">
              <input
                class="form__input"
                type="text"
                placeholder="Last Name"
                autocomplete="on"
                required
              />
            </div>
            <div class="form__input__wrapper">
              <input
                class="form__input"
                type="email"
                placeholder="Email"
                autocomplete="on"
                required
              />
            </div>
            <div class="form__input__wrapper">
              <input
                class="form__input"
                type="password"
                placeholder="Password"
                autocomplete 
                required
              />

              <svg class="input__svg">
                <use href="./svg/sprite.svg#icon-eye-slash"></use>
              </svg>
            </div>
            <div class="form__input__wrapper">
              <input
                class="form__input"
                type="password"
                placeholder="Confirm Password"
                autocomplete 
                required
              />
              <svg class="input__svg">
                <use href="./svg/sprite.svg#icon-eye-slash"></use>
              </svg>
            </div>
          </div>

          <button class="form__button" type="submit">
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
    `
  },
}

export default SignUp
