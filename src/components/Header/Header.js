import './Header.css';
import { useLocation } from 'react-router-dom';

function Header(props) {
    const location = useLocation();
    const path = location.pathname;

    

    return(
        <header className={`header ${path !== '/saved-news' ? '' : 'header_black' }`}>
            <h2 className='header__title'>NewsExplorer</h2>
            <input id='checkbox' className='header__button_checkbox' type='checkbox'/>
            <label for='checkbox' className='header__button_mobail'></label>
            {/* <div className='header__buttons'> */}
            <nav className='header__navigation'>
                <a className='header__nav header__nav_active'>Главная</a>
                <a className='header__nav'>Сохранённые статьи</a>
            </nav>
            <button className={`header__button ${path !== '/saved-news' ? '' : 'header__button_black'}`}>Авторизоваться</button>
            {/* </div> */}
        </header>
    )
}

export default Header;