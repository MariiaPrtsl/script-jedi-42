// https://www.codewars.com/kata/singleton-pattern/train/javascript

function Singleton() {
  if (!Singleton.instance) {
    Singleton.instance = this;
  }
  return Singleton.instance;
}

//https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript

class Router {
  constructor() {
    this.routes = {};
  }
  bind(url, method, action) {
    this.routes[`${method} ${url}`] = action;
  }
  runRequest(url, method) {
    const action = this.routes[`${method} ${url}`];
    return action ? action() : "Error 404: Not Found";
  }
}
