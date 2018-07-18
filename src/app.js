
export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Babel SystemJS';
    config.map([
      {"route": ["", "welcome"], "name": "welcome", "moduleId": "./views/welcome/welcome", "nav": true, "title": "Welcome"},
      {"route": "bootstrap-select", "name": "bootstrap-select", "moduleId": "./views/bootstrap-select/bootstrap-select", "nav": true, "title": "Bootstrap Select"}
    ]);

    this.router = router;
  }
}
