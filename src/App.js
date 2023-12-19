
import Counter from './components/Counter';
import Header from "./components/Header"
import Auth from './components/Auth';
import { observer } from 'mobx-react';
import counterStore from './store';
import UserProfile from "./components/UserProfile"


const App = observer(() => {

  const storeObj = counterStore;
  return (
    <>
      <Header />
      {!storeObj.isAuth && <Auth />}
      {storeObj.isAuth && <UserProfile />}
    {storeObj.isAuth && <Counter />}
    </>
  );
})

export default App;
