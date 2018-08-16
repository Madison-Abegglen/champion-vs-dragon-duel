import CvdController from "./app/components/cvd-controller.js";

class App {
  constructor() {
    this.controllers = {
      cvdController: new CvdController()
    };
  }
}

window.app = new App();
