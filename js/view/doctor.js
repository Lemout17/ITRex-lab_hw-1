const DoctorPage = {
  render: () => {
    return `
     <header class="header">
      <div class="header__logo"></div>
      <div class="header__user">
        <p class="header__user-name">Miranda Nelson</p>
        <span class="header__user-text">Doctor</span>
      </div>
      <div class="header__avatar">
        <div class="header__avatar_online"></div>
      </div>
    </header>
    <main>
      <section class="section__doctor">
        <div class="container__doctor">
          <div class="doctor__button-wrapper">
            <button class="doctor__button">Patients</button>
            <button class="doctor__button doctor__button_white">
              Resolutions
            </button>
          </div>

          <div class="doctor__filter-wrapper">
            <h2 class="form__title-text">My Patients</h2>
            <button class="doctor__filter-button"></button>
            <button class="doctor__filter-button"></button>
          </div>

          <ul class="doctor__list">
            <li class="doctor__card">
              <div class="doctor__card_avatar-wrapper">
                <div class="doctor__card_avatar"></div>
                <div class="doctor__card_text"></div>
              </div>
              <div class="doctor__card_desc-wrapper"></div>
            </li>
          </ul>
        </div>
      </section>
    </main>
    `
  },
}

export default DoctorPage
