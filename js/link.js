import router from './view/router.js'

const handleChangeUrl = (e) => {
  if (e.target.nodeName !== 'A') {
    return
  }
  e.preventDefault()

  history.pushState({}, null, `/#${e.target.dataset.name}`)

  router()
}

export default handleChangeUrl
