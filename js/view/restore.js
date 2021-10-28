const Restore = {
  render: () => {
    return `
     <main>
      <section class="section section_login">
  <form class="form form_restore">
    <div class="form__title form__title_with-link">
      <a class="form__title-link" href="#" data-name="/signin"></a>
      <span class="form__title-text">Restore password</span>
    </div>

    <p class="form__description">
      Please use your email address, and we’ll send you the link to reset your
      password
    </p>

    <div>
      <div class="form__input__wrapper form__input__wrapper_restore">
        <input
          class="form__input"
          type="email"
          placeholder="Email"
          autocomplete="on"
          required
        />
      </div>
    </div>

    <button class="form__button form__button_restore" type="submit" data-name="/confirm">
      Send Reset Link
      <svg class="button__svg button__svg_restore">
        <use href="./svg/sprite.svg#icon-angle-right-b"></use>
      </svg>
    </button>
  </form>
</section>
</main>
    `
  },
}

export default Restore
