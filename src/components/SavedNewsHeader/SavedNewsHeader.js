import './SavedNewsHeader.css';
import { useLocation } from 'react-router-dom';
import { numberDeclension, adjectiveDeclination } from '../../utils/utils';

function SavedNewsHeader({ saveNews, loggedIn, userData }) {
    const location = useLocation();
    const path = location.pathname;
    let numberSaveNews = ''
    // if (loggedIn && path === '/saved-news') {
    //     numberSaveNews = Object.keys(saveNews).length;
    //     const keywords = saveNews.map(item => item.keyword);
    //     // keyWordNews.sort();
    //     console.log(userData)
    // }
        const keywords = loggedIn ? saveNews.map(item => item.keyword) : [];

        const keywordsSorted = [...new Set(keywords)]
            .map(value => {
                const item = {};
                item.keyword = value;
                item.quantity = keywords.filter(str => str === value).length;
                return item;
            })
            .sort((a, b) => b.quantity - a.quantity)
            .map(item => item.keyword);

        const keywordsToRender = keywordsSorted.length <= 3
            ? keywordsSorted.join(', ')
            : `${keywordsSorted
                .slice(0, 3)
                .join(', ')} и ${keywordsSorted
                    .slice(3)
                    .length}-${numberDeclension(keywordsSorted)} ${adjectiveDeclination(keywordsSorted)}`;

        
   


    return (
        <div className={`${path !== '/saved-news' ? 'save-news-header_none' : 'save-news-header'}`}>
            <p className='save-news-header__text'>Сохранённые статьи</p>
            <h2 className='save-news-header__title'>{userData.name}, у вас {saveNews.length} сохранённых статей</h2>
            <p className='save-news-header__keywords'>По ключевым словам: {keywordsToRender}</p>
        </div>
    )
}

export default SavedNewsHeader;