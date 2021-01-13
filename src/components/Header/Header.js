import './Header.css';
import { useLocation } from 'react-router-dom';

function Header(props) {
    const location = useLocation();
    console.log(location.pathname)
    const path = location.pathname;

    

    return(
        <header className={`header ${path !== '/saved-news' ? '' : 'header_black' }`}>
            <h2 className='header__title'>NewsExplorer</h2>
            <nav className='header__navigation'>
                <a className='header__nav header__nav_active'>Главная</a>
                <a className='header__nav'>Сохранённые статьи</a>
            </nav>
            <button className={`header__button ${path !== '/saved-news' ? '' : 'header__button_black'}`}>Авторизоваться</button>
        </header>
    )
}

export default Header;