import './Header.css';

function Header(props) {

    return(
        <header className='header'>
            <h2 className='header__title'>NewsExplorer</h2>
            <nav className='header__navigation'>
                <a className='header__nav header__nav_active'>Главная</a>
                <a className='header__nav'>Сохранённые статьи</a>
            </nav>
            <button className='header__button'>Авторизоваться</button>
        </header>
    )
}

export default Header;