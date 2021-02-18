import {observer} from 'mobx-react';
import React from 'react'
import {Counter} from './modal';

type Props = {
  counter: Counter
}

function Hello({counter}: Props) {
  return <div>
    <button onClick={() => counter.asyncCount.execute()}>Async increase</button>
    <div>loading: {String(counter.asyncCount?.loading)}</div>
    <div>Count: {counter.asyncCount?.result}</div>
    <div>Error: {counter.asyncCount?.error?.message}</div>
    <hr/>
    <div>{counter.asyncCountResult}</div>
  </div>
}

export default observer(Hello)
