import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import '../NewsCard/NewsCard.css';
import { useState } from 'react';

function NewsCardList({cardNews, loggedIn, saveCardNews, onSignIn, nothingFound, saveNews}) {
    const [ toShow, setToShow ] = useState(3);
    const seeItem = cardNews.slice(0, toShow);
    console.log(cardNews)
    function handleToShow() {
        setToShow(toShow + 3);
    };

    return (
        <section className={`${!nothingFound ? 'news-card-list' : 'news-card-list_none'}`}>
            <h2 className='news-card-list__title'>Результаты поиска</h2>
            <ul className='cards-lists'>
                
                {seeItem.map((item) => 
                   <NewsCard key={item.url} item={item} loggedIn={loggedIn} saveCardNews={saveCardNews} onSignIn={onSignIn} saveNews={saveNews}/> 
                )}
                
            </ul>
            <button className='news-card-list__button' onClick={handleToShow}>Показать еще</button>
        </section>
    )
}

export default NewsCardList;