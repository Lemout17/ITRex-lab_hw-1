import router from '../view/router.js'
import validation from './validation.js'

const handleChangeUrl = (e) => {
  if (e.target.nodeName === 'A' || e.target.nodeName === 'BUTTON') {
    e.preventDefault()

    if (validation()) {
      history.pushState({}, null, `/#${e.target.dataset.name}`)
      router()
    }
  }
  return
}

export default handleChangeUrl
