import SignUp from './signup.js'
import SignIn from './signin.js'
import RestorePage from './restore.js'
import ConfirmPage from './confirm.js'
import DoctorPage from './doctor.js'
import ErrorPage from './error.js'
import handleChangeUrl from '../link.js'

const routes = [
  { path: '/', component: SignUp },
  { path: '/signin', component: SignIn },
  { path: '/restore', component: RestorePage },
  { path: '/confirm', component: ConfirmPage },
  { path: '/doctor', component: DoctorPage },
]

console.log(location.hash.slice(1).toLowerCase())

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/'

const findComponentByPath = (path, routes) =>
  routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined

const router = () => {
  const path = parseLocation()

  const { component = ErrorPage } = findComponentByPath(path, routes) || {}

  document.getElementById('root').innerHTML = component.render()
  const section = document.querySelector('.section')
  section?.addEventListener('click', handleChangeUrl)
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)

export default router
