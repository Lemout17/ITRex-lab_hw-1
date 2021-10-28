import router from '../view/router.js'
import validation from './validationSignUp.js'

const handleChangeUrl = (e) => {
  if (
    e.target.nodeName === 'A' ||
    e.target.classList.contains('form__button_restore')
  ) {
    e.preventDefault()

    // if (validation()) {
    //   history.pushState({}, null, `/#${e.target.dataset.name}`)
    //   router()
    // }

    history.pushState({}, null, `/#${e.target.dataset.name}`)
    router()
  }
  return
}

export default handleChangeUrl
