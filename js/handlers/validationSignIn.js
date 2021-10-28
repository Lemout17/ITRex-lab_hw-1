const validationSignIn = () => {
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const errorMessageEmail = document.querySelector('.error-message__email')
  const errorMessagePassword = document.querySelector(
    '.error-message__password'
  )

  if (email.value === '') {
    email.classList.add('form__input_error')
    errorMessageEmail.innerHTML = 'Please enter your email.'
    errorMessageEmail.classList.add('form__text_error')
    return false
  } else {
    email.classList.remove('form__input_error')
    errorMessageEmail.innerHTML = ''
  }

  if (!emailIsValid(email.value)) {
    email.classList.add('form__input_error')
    errorMessageEmail.innerHTML = 'Please enter a valid email.'
    errorMessageEmail.classList.add('form__text_error')

    return false
  } else {
    email.classList.remove('form__input_error')
    errorMessageEmail.innerHTML = ''
  }

  if (password?.value === '') {
    password.classList.add('form__input_error')
    errorMessagePassword.innerHTML = 'Please enter your password.'
    errorMessagePassword.classList.add('form__text_error')
    return false
  } else {
    password.classList.remove('form__input_error')
    errorMessagePassword.innerHTML = ''
  }

  if (!passwordIsValid(password.value)) {
    password.classList.add('form__input_error')
    errorMessagePassword.innerHTML = 'Please enter a valid password.'
    errorMessagePassword.classList.add('form__text_error')

    return false
  } else {
    password.classList.remove('form__input_error')
    errorMessagePassword.innerHTML = ''
  }

  return true
}

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const passwordIsValid = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
}

export default validationSignIn
