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

  if (username.value === '') {
    username.classList.add('form__input_error')
    errorMessageName.innerHTML = 'Please enter your name.'
    errorMessageName.classList.add('form__text_error')
    return false
  } else {
    username.classList.remove('form__input_error')
    errorMessageName.innerHTML = ''
  }

  if (!usernameIsValid(username.value)) {
    username.classList.add('form__input_error')
    errorMessageName.innerHTML = 'Please enter a valid name.'
    errorMessageName.classList.add('form__text_error')
    return false
  } else {
    username.classList.remove('form__input_error')
    errorMessageName.innerHTML = ''
  }

  if (surname.value === '') {
    surname.classList.add('form__input_error')
    errorMessageSurname.innerHTML = 'Please enter your surname.'
    errorMessageSurname.classList.add('form__text_error')
    return false
  } else {
    surname.classList.remove('form__input_error')
    errorMessageSurname.innerHTML = ''
  }

  if (!usernameIsValid(surname.value)) {
    surname.classList.add('form__input_error')
    errorMessageSurname.innerHTML = 'Please enter a valid surname.'
    errorMessageSurname.classList.add('form__text_error')
    return false
  } else {
    surname.classList.remove('form__input_error')
    errorMessageSurname.innerHTML = ''
  }

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

  if (confirmPass.value === '') {
    confirmPass.classList.add('form__input_error')
    errorMessageConfirmPass.innerHTML = 'Please enter your password.'
    errorMessageConfirmPass.classList.add('form__text_error')
    return false
  } else {
    confirmPass.classList.remove('form__input_error')
    errorMessageConfirmPass.innerHTML = ''
  }

  if (!passwordIsValid(confirmPass.value)) {
    confirmPass.classList.add('form__input_error')
    errorMessageConfirmPass.innerHTML = 'Please enter a valid password.'
    errorMessageConfirmPass.classList.add('form__text_error')

    return false
  } else {
    confirmPass.classList.remove('form__input_error')
    errorMessageConfirmPass.innerHTML = ''
  }

  if (!passEqual(password.value)) {
    password.classList.add('form__input_error')
    errorMessagePassword.innerHTML = 'Passwords not equal'
    errorMessagePassword.classList.add('form__text_error')
    confirmPass.classList.add('form__input_error')
    errorMessageConfirmPass.innerHTML = 'Passwords not equal'
    errorMessageConfirmPass.classList.add('form__text_error')
    return false
  } else {
    password.classList.remove('form__input_error')
    errorMessagePassword.innerHTML = ''
    confirmPass.classList.remove('form__input_error')
    errorMessageConfirmPass.innerHTML = ''
  }

  return true
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
