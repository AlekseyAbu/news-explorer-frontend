import './NewsCard.css';
import { setCard } from '../../utils/Token';

function NewsCard({key, item, handleToShow}) {
    console.log(item)
    const text = item.description;
    const croppeText = text.substring(0, 160);
    const title = item.title;
    const croppeTitle = title.substring(0, 55);
    

    let options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    }
      
    function getDate(str) {
       var date = new Date(str);
       return date.toLocaleString('ru', options)
    }
       
    const date = getDate(item.publishedAt);

    function setCardSave() {
        console.log(item)
        const keyItem = 'save'
        setCard({keyItem, item})
    }

    return(
        
        <li className='card'>
            <button className='card__button-save' onClick={setCardSave}></button>
            <img className='card__img' src={item.urlToImage} alt='Изображение карточки' />
            <div className='card__description'>
                <time className='card__time'>{date}</time>
                <h3 className='card__title'>{`${croppeTitle}...`}</h3>
                <p className='card__text'>{`${croppeText}...`}</p>
                <p className='card__source'>{item.author}</p>
            </div>
        </li>

        
    )
}

export default NewsCard;