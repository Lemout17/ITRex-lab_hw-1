import validationSignIn from '../validation/validationSignIn.js'
import validationSignUp from '../validation/validationSignUp.js'

const Handler = (router, routes) => (e) => {
  const handleChangeUrl = (e) => {
    e.preventDefault()
    history.pushState({}, null, `/#${e.target.dataset.name}`)
    router(routes)
  }

  const handleSubmitSignUp = (e) => {
    e.preventDefault()
    if (validationSignUp()) {
      history.pushState({}, null, `/#${e.target.dataset.name}`)
      router(routes)
    }
  }

  const handleSubmitSignIn = (e) => {
    e.preventDefault()
    if (validationSignIn()) {
      history.pushState({}, null, `/#${e.target.dataset.name}`)
      router(routes)
    }
  }

  const handleTogglePassword = (e) => {
    e.target.previousElementSibling.type === 'password'
      ? (e.target.previousElementSibling.type = 'text')
      : (e.target.previousElementSibling.type = 'password')

    e.target.classList.contains('input__svg_close')
      ? e.target.classList.replace('input__svg_close', 'input__svg_open')
      : e.target.classList.replace('input__svg_open', 'input__svg_close')
  }

  if (
    e.target.nodeName === 'A' ||
    e.target.classList.contains('form__button_restore')
  ) {
    handleChangeUrl(e)
  }

  if (e.target.classList.contains('form__button_register')) {
    handleSubmitSignUp(e)
  }

  if (e.target.classList.contains('form__button_login')) {
    handleSubmitSignIn(e)
  }

  if (e.target.classList.contains('input__svg')) {
    handleTogglePassword(e)
  }
}

export default Handler
