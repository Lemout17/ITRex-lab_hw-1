import router from '../view/router.js'
import validationSignIn from './validationSignIn.js'

const handleSubmitSignIn = (e) => {
  if (e.target.classList.contains('form__button_login')) {
    e.preventDefault()
    if (validationSignIn()) {
      history.pushState({}, null, `/#${e.target.dataset.name}`)
      router()
    }
  }

  return
}

export default handleSubmitSignIn
