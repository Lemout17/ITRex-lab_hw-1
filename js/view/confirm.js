const Confirm = {
  render: () => {
    return `
    <main>
     <section class="section section_login">
        <div class="container container_confirm">
          <div class="form__title form__title_with-link">
            <a class="form__title-link" href="#" data-name="/signin"></a>
            <span class="form__title-text">Restore password</span>
          </div>
          <p class="form__description form__description_confirm">
            An email has been sent to
            <a href="./login.html">example@exam.com</a>. Check your inbox, and
            click the reset link provided.
          </p>
        </div>
      </section>
    </main>
    `
  },
}

export default Confirm
