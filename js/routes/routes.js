import SignUp from '../view/signup.js'
import SignIn from '../view/signin.js'
import RestorePage from '../view/restore.js'
import ConfirmPage from '../view/confirm.js'
import DoctorPage from '../view/doctor.js'

const routes = [
  { path: '/', component: SignUp },
  { path: '/signin', component: SignIn },
  { path: '/restore', component: RestorePage },
  { path: '/confirm', component: ConfirmPage },
  { path: '/doctor', component: DoctorPage },
]

export default routes
