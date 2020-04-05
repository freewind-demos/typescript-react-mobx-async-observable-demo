import {action, computed, observable} from 'mobx';
import fetchFromRemote from './fetchFromRemote';

export class Counter {
  @observable count: number = 0

  @action
  async asyncIncrease() {
    this.count += await fetchFromRemote()
  }

}
