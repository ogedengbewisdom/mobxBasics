import counterStore from '../store';
import classes from './Header.module.css';

const Header = () => {

  const storeObj = counterStore;
  const logoutHandler = () => {
    storeObj.logout()
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {storeObj.isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
