const validationSignUp = () => {
  const username = document.getElementById('name')
  const surname = document.getElementById('surname')
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const confirmPass = document.getElementById('confirmPass')
  const errorMessageName = document.querySelector('.error-message__name')
  const errorMessageSurname = document.querySelector('.error-message__surname')
  const errorMessageEmail = document.querySelector('.error-message__email')
  const errorMessagePassword = document.querySelector(
    '.error-message__password'
  )
  const errorMessageConfirmPass = document.querySelector(
    '.error-message__confirmPass'
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

  const isPassEqual = (firstPass, secondPass, firstMess, secondMess, reg) => {
    if (!reg(firstPass.value)) {
      firstPass.classList.add('form__input_error')
      firstMess.innerHTML = 'Passwords not equal'
      firstMess.classList.add('form__text_error')
      secondPass.classList.add('form__input_error')
      secondMess.innerHTML = 'Passwords not equal'
      secondMess.classList.add('form__text_error')

      return false
    } else {
      firstPass.classList.remove('form__input_error')
      firstMess.innerHTML = ''
      secondPass.classList.remove('form__input_error')
      secondMess.innerHTML = ''
    }

    return true
  }

  const isSignUpValid =
    ifFieldValid(username, errorMessageName, usernameIsValid) &&
    ifFieldValid(surname, errorMessageSurname, usernameIsValid) &&
    ifFieldValid(email, errorMessageEmail, emailIsValid) &&
    ifFieldValid(password, errorMessagePassword, passwordIsValid) &&
    ifFieldValid(confirmPass, errorMessageConfirmPass, passwordIsValid) &&
    isPassEqual(
      password,
      confirmPass,
      errorMessagePassword,
      errorMessageConfirmPass,
      passEqual
    )

  console.log('isSignUpValid', isSignUpValid)

  return isSignUpValid
}

const passEqual = (pass) => {
  if (pass !== confirmPass.value) {
    return false
  }
  return true
}

const usernameIsValid = (name) => {
  return /^[a-z][a-z '-.,]{1,21}$|^$/i.test(name)
}

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const passwordIsValid = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
}

export default validationSignUp
