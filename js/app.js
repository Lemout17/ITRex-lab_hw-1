import routes from './routes/routes.js'
import ErrorPage from './view/error.js'
import handler from './handlers/handler.js'

class Model {
  constructor() {}

  parseLocation() {
    return location.hash.slice(1).toLowerCase() || '/'
  }

  findComponentByPath(path, routes) {
    return (
      routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) ||
      undefined
    )
  }

  router = (routes) => {
    const path = this.parseLocation()

    const { component = ErrorPage } =
      this.findComponentByPath(path, routes) || {}

    document.getElementById('root').innerHTML = component.render()
    const section = document.querySelector('.section')

    section?.addEventListener('click', handler(this.router, routes))
  }
}

class View {
  constructor(routes) {
    this.routes = routes
  }
}

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
    window.addEventListener('hashchange', () =>
      this.model.router(this.view.routes)
    )
    window.addEventListener('load', () => this.model.router(this.view.routes))
  }
}

const app = new Controller(new Model(), new View(routes))

export default app
