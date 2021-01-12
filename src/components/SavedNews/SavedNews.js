import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard.js';

function SavedNews(params) {
    return(
        <section className='saved-news'>
            <ul className='saved-news__lists'>
                <NewsCard />
            </ul>
        </section>
    )
}

export default SavedNews;