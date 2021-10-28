import router from '../view/router.js'
import validationSignUp from './validationSignUp.js'

const handleSubmitSignUp = (e) => {
  if (e.target.classList.contains('form__button_register')) {
    e.preventDefault()
    if (validationSignUp()) {
      history.pushState({}, null, `/#${e.target.dataset.name}`)
      router()
    }
  }

  return
}

export default handleSubmitSignUp
