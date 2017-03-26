import { observable } from 'mobx';

class appState {
  @observable loading = false;
  @observable currencies = [];
}

export default new appState;
