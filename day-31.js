// https://www.codewars.com/kata/singleton-pattern/train/javascript

function Singleton() {
  if (!Singleton.instance) {
    Singleton.instance = this;
  }
  return Singleton.instance;
}

//https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript
