import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard.js';
import '../NewsCard/NewsCard.css';
import { getCard } from '../../utils/Token';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews() {
    const dataSaveCard = getCard('save');
    console.log(dataSaveCard)


    return(
        <section className='saved-news'>   
            <ul className='saved-news__lists'>
                {dataSaveCard.map((item) => 
                    <NewsCard 
                        key={item.url} 
                        item={item}
                    />
                    )
                }
            </ul>
        </section>
    )
}

export default SavedNews;