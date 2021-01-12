import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(params) {
    return(
        <section className='news-card-list'>
            <h2 className='news-card-list__title'>Результаты поиска</h2>
            <ul className='cards-lists'>
                <NewsCard />
            </ul>
            <button className='news-card-list__button'>Показать еще</button>
        </section>
    )
}

export default NewsCardList;