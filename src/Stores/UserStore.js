import { extendObservable } from 'mobx';

class UserStore {

  constructor() {
    extendObservable(this, {

      username: '',
      isLoggedIn: false

    })
  }
}

export default new UserStore();