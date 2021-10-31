const validationSignIn = () => {
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const errorMessageEmail = document.querySelector('.error-message__email')
  const errorMessagePassword = document.querySelector(
    '.error-message__password'
  )

  const ifFieldValid = (target, message, reg) => {
    if (!target.value) {
      target.classList.add('form__input_error')
      message.innerHTML = `Please enter your ${target.type}.`
      message.classList.add('form__text_error')

      return false
    } else {
      target.classList.remove('form__input_error')
      message.innerHTML = ''
    }

    if (!reg(target.value)) {
      target.classList.add('form__input_error')
      message.innerHTML = `Please enter a valid ${target.type}.`
      message.classList.add('form__text_error')

      return false
    } else {
      target.classList.remove('form__input_error')
      message.innerHTML = ''
    }

    return true
  }

  const isSignInValid =
    ifFieldValid(email, errorMessageEmail, emailIsValid) &&
    ifFieldValid(password, errorMessagePassword, passwordIsValid)

  console.log('isSignInValid', isSignInValid)

  return isSignInValid
}

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const passwordIsValid = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
}

export default validationSignIn
