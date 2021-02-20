import {observable, computed, reaction} from 'mobx';
import {AsyncObservable} from './AsyncObservable';
import fetchFromRemote from './fetchFromRemote';

export class Counter {
  @observable shouldFetch = 0

  @observable fetchRemoteCount = (() => {
    const task = new AsyncObservable(() => fetchFromRemote())
    reaction(() => this.shouldFetch, () => {
      task.execute()
    })
    return task;
  })();

  @computed get asyncCountResult(): string {
    return JSON.stringify(this.fetchRemoteCount)
  }
}
