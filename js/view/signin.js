const SignIn = {
  render: () => {
    return `
     <main>
     <section class="section section_login">
        <form class="form" autocomplete="on">
          <div class="form__title">
            <span class="form__title-text">Sign In</span>
          </div>
          <div>
            <div class="form__input__wrapper form__input__wrapper_login">
              <input
                class="form__input"
                type="email"
                placeholder="Email"
                autocomplete="on"
                required
              />
              
            </div>
            
            <div class="form__input__wrapper form__input__wrapper_login">
              <input
                class="form__input form__input_error"
                type="password"
                placeholder="Password"
                autocomplete="on"
                required
              />
              <svg class="input__svg">
                <use href="./svg/sprite.svg#icon-eye-slash"></use>
              </svg>
            </div>
          </div>

          <p class="form__text_error">
            Password contain unsupported characters
          </p>

          <button class="form__button form__button_login" type="submit">
            Sign in
            <svg class="button__svg">
              <use href="./svg/sprite.svg#icon-angle-right-b"></use>
            </svg>
          </button>

          <a class="form__link form__link_login" href="#" data-name="/restore"
            >Forgot Password?</a
          >

          <div class="form__textwrapper form__textwrapper_login">
            <p class="form__text">Already have an account?</p>
            <a class="form__link" href="#" data-name="/">Sign up</a>
          </div>
        </form>
      </section>
     </main>
    `
  },
}

export default SignIn
