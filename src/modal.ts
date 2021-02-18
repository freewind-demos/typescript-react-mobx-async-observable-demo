import {action, observable, computed} from 'mobx';
import fetchFromRemote from './fetchFromRemote';

class AsyncObservable<ARGS extends any[] = any[], DATA = unknown> {
  constructor(private fn: (...args: ARGS) => Promise<DATA>) {
    this.reset();
  }

  @observable loading?: boolean;
  @observable result?: DATA;
  @observable error?: Error;
  @observable status: 'not-started' | 'loading' | 'success' | 'error' = 'not-started'

  @action reset() {
    this.loading = undefined;
    this.result = undefined;
    this.error = undefined;
    this.status = 'not-started';
  }

  @action
  private startLoading() {
    this.loading = true;
    this.result = undefined;
    this.error = undefined;
    this.status = 'loading';
  }

  @action
  private setSuccess(data: DATA): void {
    this.loading = false;
    this.result = data;
    this.error = undefined;
    this.status = 'success';
  }

  @action
  private setError(error: Error): void {
    this.loading = false;
    this.result = undefined;
    this.error = error;
    this.status = 'error';
  }

  @action execute = (...args: ARGS) => {
    this.startLoading();
    this.fn(...args).then(data => {
      this.setSuccess(data);
    }).catch(error => {
      this.setError(error)
    })
  }
}

export class Counter {
  @observable asyncCount = new AsyncObservable(() => fetchFromRemote());

  @computed get asyncCountResult(): string {
    return JSON.stringify(this.asyncCount)
  }
}
