import './Header.css';
import { Link, Route, Switch, useLocation } from 'react-router-dom';

function Header({onSignIn, loggedIn, userData}) {
    const location = useLocation();
    const path = location.pathname;

    console.log(userData)

    return(
        <header className={`header ${path !== '/saved-news' ? '' : 'header_black' }`}>
            <h2 className='header__title'>NewsExplorer</h2>
            <input id='checkbox' type='checkbox' className='header__button_checkbox'/>
            <label for='checkbox' className='header__button_mobail'></label>
            <nav className='header__navigation'>
                <Switch>
                    <Route exact path='/'>
                        <Link to='/' className='header__link header__link_active'>Главная</Link>
                        <Link to='/saved-news' className={`${loggedIn ? 'header__link' : 'header__link_none'}`}>Сохранённые статьи</Link>
                    </Route>
                    <Route path='/saved-news'>
                        <Link to='/' className='header__link header__link_black'>Главная</Link>
                        <Link to='/saved-news' className='header__link header__link_active header__link_black'>Сохранённые статьи</Link>
                    </Route>
                </Switch>
                {/* <a className='header__nav header__nav_active'>Главная</a>
                <a className='header__nav'>Сохранённые статьи</a> */}
            </nav>
            <button className={`header__button ${path !== '/saved-news' ? '' : 'header__button_black'}`} onClick={onSignIn}>{loggedIn ? userData.name : 'Авторизоваться'}</button>
        </header>
    )
}

export default Header;