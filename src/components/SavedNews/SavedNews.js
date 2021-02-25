import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard.js';
import '../NewsCard/NewsCard.css';


function SavedNews({saveNews, deleteSaveCard, onSignIn, loggedIn}) {
    
    return(
        <section className='saved-news'>   
            <ul className='saved-news__lists'>
                {saveNews.map(item => 
                    <NewsCard key={item.url} item={item} deleteSaveCard={deleteSaveCard} onSignIn={onSignIn} loggedIn={loggedIn}/>    
                )}
            </ul>
        </section>
    )
}

export default SavedNews;