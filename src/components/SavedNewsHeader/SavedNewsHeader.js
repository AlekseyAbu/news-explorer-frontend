import './SavedNewsHeader.css';
import { useLocation } from 'react-router-dom';

function SavedNewsHeader({saveNews}) {
    const location = useLocation();
    const path = location.pathname;
    const numberSaveNews = Object.keys(saveNews).length;
    const keyWordNews = saveNews.map(item => item.keyword);
    keyWordNews.sort();
    console.log(keyWordNews)

    return(
        <div className={`${path !== '/saved-news' ? 'save-news-header_none' : 'save-news-header' }`}>
            <p className='save-news-header__text'>Сохранённые статьи</p>
            <h2 className='save-news-header__title'>Грета, у вас {numberSaveNews} сохранённых статей</h2>
            <p className='save-news-header__keywords'>{`По ключевым словам: `}</p>
        </div>
    )
}

export default SavedNewsHeader;