import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NewsCard.css';
import { setCard } from '../../utils/Token';

function NewsCard({item, handleToShow, loggedIn, saveCardNews}) {
    const [ isStateSave, setIsStateSave ] = useState(false);
    const text = item.description;
    const croppeText = text.substring(0, 160);
    const title = item.title;
    const croppeTitle = title.substring(0, 55);

    const location = useLocation();
    const path = location.pathname;

    let options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    }
      
    function getDate(str) {
       let date = new Date(str);
       return date.toLocaleString('ru', options)
    }
       
    const date = getDate(item.publishedAt);

    function setCardSave() {
        if(loggedIn){
            setIsStateSave(true)
            saveCardNews(item)
        } else{

        }
        const keyItem = 'save'
        setCard({keyItem, item})
    }

    function setCardRemove() {
        setIsStateSave(false)
    }

    // function saveCardCheck() {
    //     if(key === )
    // }

    console.log(isStateSave)

    return(
        
        <li className='card'>
            <button className={`card__button ${isStateSave ? 'card__button-save_blue' : ''} ${path !== '/saved-news' ? 'card__button-save' : 'card__button-delete'}`} 
                    onClick = {() => { if (isStateSave) { setCardRemove() } else { setCardSave() } }}
            ></button>
            <p className='card__button-text'>{`${path !== '/saved-news' ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}`}</p>
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