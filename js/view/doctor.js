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

          <!-- **default container** -->
          <!-- <div class="doctor__empty-wrapper">
            <div class="doctor__empty-icon"></div>
            <p class="doctor__empty-text">
              You have no patients yet. <br />
              To create a patient profile, please contact your administrator.
            </p>
          </div> -->

          <!-- **container with patients cards** -->
          <ul class="doctor__list">
            <li class="doctor__card">
              <div class="doctor__card_header-wrapper">
                <div class="doctor__card_avatar"></div>
                <div class="doctor__card_text-wrapper">
                  <p class="doctor__card_text-name">Zachary Adki...</p>
                  <div class="doctor__card_status-wrapper">
                    <div class="doctor__card_status-indicator"></div>
                    <span class="doctor__card_text-status"
                      >Appointment is confirmed</span
                    >
                  </div>
                </div>
                <button class="doctor__card_button" type="button"></button>
              </div>
              <div class="doctor__card_desc-wrapper">
                <p class="doctor__card_date">Thu Sept 10, 2021 4 pm – 5 pm</p>
                <p class="doctor__card_description">
                  We will invite you in for a full review every year and more
                  frequently if you are struggling with blood sugar levels
                </p>
              </div>
            </li>

            <li class="doctor__card">
              <div class="doctor__card_header-wrapper">
                <div class="doctor__card_avatar"></div>
                <div class="doctor__card_text-wrapper">
                  <p class="doctor__card_text-name">Zachary Adki...</p>
                  <div class="doctor__card_status-wrapper">
                    <div class="doctor__card_status-indicator"></div>
                    <span class="doctor__card_text-status"
                      >Appointment is confirmed</span
                    >
                  </div>
                </div>
                <button class="doctor__card_button" type="button"></button>
              </div>
              <div class="doctor__card_desc-wrapper">
                <p class="doctor__card_date">Thu Sept 10, 2021 4 pm – 5 pm</p>
                <p class="doctor__card_description">
                  We will invite you in for a full review every year and more
                  frequently if you are struggling with blood sugar levels
                </p>
              </div>
            </li>

            <li class="doctor__card">
              <div class="doctor__card_header-wrapper">
                <div class="doctor__card_avatar"></div>
                <div class="doctor__card_text-wrapper">
                  <p class="doctor__card_text-name">Zachary Adki...</p>
                  <div class="doctor__card_status-wrapper">
                    <div class="doctor__card_status-indicator"></div>
                    <span class="doctor__card_text-status"
                      >Appointment is confirmed</span
                    >
                  </div>
                </div>
                <button class="doctor__card_button" type="button"></button>
              </div>
              <div class="doctor__card_desc-wrapper">
                <p class="doctor__card_date">Thu Sept 10, 2021 4 pm – 5 pm</p>
                <p class="doctor__card_description">
                  We will invite you in for a full review every year and more
                  frequently if you are struggling with blood sugar levels
                </p>
              </div>
            </li>

            <li class="doctor__card">
              <div class="doctor__card_header-wrapper">
                <div class="doctor__card_avatar"></div>
                <div class="doctor__card_text-wrapper">
                  <p class="doctor__card_text-name">Zachary Adki...</p>
                  <div class="doctor__card_status-wrapper">
                    <div class="doctor__card_status-indicator"></div>
                    <span class="doctor__card_text-status"
                      >Appointment is confirmed</span
                    >
                  </div>
                </div>
                <button class="doctor__card_button" type="button"></button>
              </div>
              <div class="doctor__card_desc-wrapper">
                <p class="doctor__card_date">Thu Sept 10, 2021 4 pm – 5 pm</p>
                <p class="doctor__card_description">
                  We will invite you in for a full review every year and more
                  frequently if you are struggling with blood sugar levels
                </p>
              </div>
            </li>

            <li class="doctor__card">
              <div class="doctor__card_header-wrapper">
                <div class="doctor__card_avatar"></div>
                <div class="doctor__card_text-wrapper">
                  <p class="doctor__card_text-name">Zachary Adki...</p>
                  <div class="doctor__card_status-wrapper">
                    <div class="doctor__card_status-indicator"></div>
                    <span class="doctor__card_text-status"
                      >Appointment is confirmed</span
                    >
                  </div>
                </div>
                <button class="doctor__card_button" type="button"></button>
              </div>
              <div class="doctor__card_desc-wrapper">
                <p class="doctor__card_date">Thu Sept 10, 2021 4 pm – 5 pm</p>
                <p class="doctor__card_description">
                  We will invite you in for a full review every year and more
                  frequently if you are struggling with blood sugar levels
                </p>
              </div>
            </li>

            <li class="doctor__card">
              <div class="doctor__card_header-wrapper">
                <div class="doctor__card_avatar"></div>
                <div class="doctor__card_text-wrapper">
                  <p class="doctor__card_text-name">Zachary Adki...</p>
                  <div class="doctor__card_status-wrapper">
                    <div class="doctor__card_status-indicator"></div>
                    <span class="doctor__card_text-status"
                      >Appointment is confirmed</span
                    >
                  </div>
                </div>
                <button class="doctor__card_button" type="button"></button>
              </div>
              <div class="doctor__card_desc-wrapper">
                <p class="doctor__card_date">Thu Sept 10, 2021 4 pm – 5 pm</p>
                <p class="doctor__card_description">
                  We will invite you in for a full review every year and more
                  frequently if you are struggling with blood sugar levels
                </p>
              </div>
            </li>

            <li class="doctor__card">
              <div class="doctor__card_header-wrapper">
                <div class="doctor__card_avatar"></div>
                <div class="doctor__card_text-wrapper">
                  <p class="doctor__card_text-name">Zachary Adki...</p>
                  <div class="doctor__card_status-wrapper">
                    <div class="doctor__card_status-indicator"></div>
                    <span class="doctor__card_text-status"
                      >Appointment is confirmed</span
                    >
                  </div>
                </div>
                <button class="doctor__card_button" type="button"></button>
              </div>
              <div class="doctor__card_desc-wrapper">
                <p class="doctor__card_date">Thu Sept 10, 2021 4 pm – 5 pm</p>
                <p class="doctor__card_description">
                  We will invite you in for a full review every year and more
                  frequently if you are struggling with blood sugar levels
                </p>
              </div>
            </li>

            <li class="doctor__card">
              <div class="doctor__card_header-wrapper">
                <div class="doctor__card_avatar"></div>
                <div class="doctor__card_text-wrapper">
                  <p class="doctor__card_text-name">Zachary Adki...</p>
                  <div class="doctor__card_status-wrapper">
                    <div class="doctor__card_status-indicator"></div>
                    <span class="doctor__card_text-status"
                      >Appointment is confirmed</span
                    >
                  </div>
                </div>
                <button class="doctor__card_button" type="button"></button>
              </div>
              <div class="doctor__card_desc-wrapper">
                <p class="doctor__card_date">Thu Sept 10, 2021 4 pm – 5 pm</p>
                <p class="doctor__card_description">
                  We will invite you in for a full review every year and more
                  frequently if you are struggling with blood sugar levels
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
    `
  },
}

export default DoctorPage
