const ifFieldValid = (target, message, reg) => {
  const isFieldValidCheck = target.value && reg(target.value)

  if (!isFieldValidCheck) {
    target.classList.add('form__input_error')
    message.innerHTML = `Please enter a valid ${target.type}.`
    message.classList.add('form__text_error')
  } else {
    target.classList.remove('form__input_error')
    message.innerHTML = ''
  }

  return isFieldValidCheck
}

export default ifFieldValid
