import VendController from './controllers/VendController.js'


class App {
  constructor() {
    this.controllers = {
      vendController: new VendController()
    }
  }
}

window["app"] = new App()