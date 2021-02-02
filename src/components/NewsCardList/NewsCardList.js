import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import '../NewsCard/NewsCard.css';
import { useState } from 'react';

function NewsCardList({cardNews, newsCardList}) {
    const [ toShow, setToShow ] = useState(3);
    const seeItem = cardNews.slice(0, toShow)
    function handleToShow() {
        setToShow(toShow + 3)
    }
    console.log(cardNews)

    return (
        <section className={`${newsCardList ? 'news-card-list' : 'news-card-list_none'}`}>
            <h2 className='news-card-list__title'>Результаты поиска</h2>
            <ul className='cards-lists'>
                
                {seeItem.map((item, key) => 
                   <NewsCard key={key} item={item} /> 
                )}
                
            </ul>
            <button className='news-card-list__button' onClick={handleToShow}>Показать еще</button>
        </section>
    )
}

export default NewsCardList;