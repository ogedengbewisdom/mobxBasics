
import Counter from './components/Counter';
import Header from "./components/Header"
import Auth from './components/Auth';
import { observer } from 'mobx-react';
import counterStore from './store';
import UserProfile from "./components/UserProfile"
import NewTodos from './components/NewTodos';
import TodoItem from './components/TodoItem';


const App = observer(() => {

  const storeObj = counterStore;
  return (
    <>
      <Header />
      {!storeObj.isAuth && <Auth />}
      {storeObj.isAuth && <UserProfile />}
      <TodoItem />
      <NewTodos />
     
    {storeObj.isAuth && <Counter />}
    </>
  );
})

export default App;
