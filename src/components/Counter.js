
import classes from './Counter.module.css';
import counterStore from '../store';
import { observer } from 'mobx-react';

const Counter = observer(() => {

  const countObj = counterStore

  const toggleCounterHandler = () => {
    countObj.toggle()
  };

  const increaseHandler = () => {
    countObj.increase()
  };

  const decreaseHandler = () => {
    countObj.decrease()
  };

  const incrementHandler = () => {
    countObj.increment(10)
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {countObj.show && <div className={classes.value}>{countObj.count}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={increaseHandler}>INCREASE</button>
      <button onClick={incrementHandler}>INCREASE by 10</button>
      <button onClick={decreaseHandler}>DECREASE</button>
    </main>
  );
});

export default Counter;
