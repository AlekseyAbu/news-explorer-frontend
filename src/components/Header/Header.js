import './Header.css';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import imgExit from '../../images/img_exit.png';
import { removeToken } from '../../utils/Token';
import imgExitBlack from '../../images/img_exit_black.png';

function Header({onSignIn, loggedIn, userData, signOut}) {
    const location = useLocation();
    const path = location.pathname;
    const textButton = loggedIn ? userData.name : 'Авторизоваться';

    return(
        <header className={`header ${path !== '/saved-news' ? '' : 'header_black' }`}>
            <h2 className='header__title'>NewsExplorer</h2>
            <input id='checkbox' type='checkbox' className='header__button_checkbox'/>
            <label htmlFor='checkbox' className='header__button_mobail'></label>
            <nav className='header__navigation'>
                <Switch>
                    <Route exact path='/'>
                        <Link to='/' className='header__link header__link_active'>Главная</Link>
                        <Link to='/saved-news' className={`${loggedIn ? 'header__link' : 'header__link_none'}`}>Сохранённые статьи</Link>
                    </Route>
                    <Route path='/saved-news'>
                        <Link to='/' className='header__link header__link_black'>Главная</Link>
                        <Link to='/saved-news' className='header__link header__link_active-black header__link_black'>Сохранённые статьи</Link>
                    </Route>
                </Switch>
            </nav>
            <button className={`header__button ${path !== '/saved-news' ? '' : 'header__button_black'}`} onClick={loggedIn ? signOut : onSignIn}>
                <p className='header__button-text'>{textButton}</p>
                {loggedIn && (<img className='header__button-exit' src={path === '/' ? imgExit : imgExitBlack} alt='Выход'/>)}
            </button>
        </header>
    )
}

export default Header;