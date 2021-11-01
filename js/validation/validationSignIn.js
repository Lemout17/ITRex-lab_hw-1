import ifFieldValid from './validation.js'

const validationSignIn = () => {
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const errorMessageEmail = document.querySelector('.error-message__email')
  const errorMessagePassword = document.querySelector(
    '.error-message__password'
  )

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
