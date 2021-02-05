import './SavedNewsHeader.css';
import { Link, Route, Switch, useLocation } from 'react-router-dom';

function SavedNewsHeader(params) {
    const location = useLocation();
    const path = location.pathname;

    return(
        <div className={`${path !== '/saved-news' ? 'save-news-header_none' : 'save-news-header' }`}>
            <p className='save-news-header__text'>Сохранённые статьи</p>
            <h2 className='save-news-header__title'>Грета, у вас 5 сохранённых статей</h2>
            <p className='save-news-header__keywords'>{`По ключевым словам: `}</p>
        </div>
    )
}

export default SavedNewsHeader;