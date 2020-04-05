import {observer} from 'mobx-react';
import React from 'react'
import {Counter} from './modal';

type Props = {
  counter: Counter
}

function Hello({counter}: Props) {
  return <div>
    <button onClick={() => counter.asyncIncrease()}>Async increase</button>
    <div>Count: {counter.count}</div>
  </div>
}

export default observer(Hello)
