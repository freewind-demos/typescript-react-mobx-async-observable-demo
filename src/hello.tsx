import {observer} from 'mobx-react';
import React from 'react'
import {Counter} from './modal';

type Props = {
  counter: Counter
}

function Hello({counter}: Props) {
  return <div>
    <button onClick={() => counter.shouldFetch += 1}>Trigger</button>
    <button onClick={() => counter.fetchRemoteCount.execute()}>Execute Directly</button>
    <div>loading: {String(counter.fetchRemoteCount?.loading)}</div>
    <div>Count: {counter.fetchRemoteCount?.result}</div>
    <div>Error: {counter.fetchRemoteCount?.error?.message}</div>
    <hr/>
    <div>counter.shouldFetch: {counter.shouldFetch}</div>
    <div>counter.asyncCountResult: {counter.asyncCountResult}</div>
  </div>
}

export default observer(Hello)
