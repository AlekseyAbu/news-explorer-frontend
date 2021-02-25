import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NewsCard.css';
import { setCard } from '../../utils/Token';

function NewsCard({item, loggedIn, saveCardNews, deleteSaveCard, onSignIn}) {
    // const [ isStateSave, setIsStateSave ] = useState(false);
    const isStateSave = false;

    let article = {}
    if(!item.description){
        article = {
            content: item.keyword, 
            title: item.title, 
            description: item.text, 
            publishedAt: item.date, 
            author: item.source, 
            url: item.link, 
            urlToImage: item.image,
            _id: item._id
        } 
    } 
    else {
        article = item; 
    }

    const text = article.description;
    const croppeText = text.substring(0, 160);
    const title = article.title;
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
       
    const date = getDate(article.publishedAt);

    const infoButtonText = `${path !== '/saved-news' ? 'Войдите, чтобы сохранять статьи' : 'Убрать из сохранённых'}`;

    //сохранение карточки
    function setCardSave() {
        if(!isStateSave){
            // setIsStateSave(true)
            saveCardNews(article)
        } else{

        }
        const keyItem = 'save'
        setCard({keyItem, article})
    }

    //удаление карточки
    function setCardRemove() {
        // setIsStateSave(false);
        deleteSaveCard(article._id);
    }

    return(
        
        <li className='card'>
            <button className={`card__button ${loggedIn && path === '/' && isStateSave ? 'card__button-save_blue' : 
                                (path === '/' ? 'card__button-save' : 'card__button-delete')} 
                              `} 
                    onClick ={loggedIn ? (path === '/' ? setCardSave : setCardRemove ) : onSignIn }
            ></button>

            <div className='card__button-text-container'>
                {loggedIn && path === '/' && isStateSave ? 
                    <p className='card__button-text'>Убрать из сохранённых</p>
                    : (loggedIn && path === '/' ? '' : 
                        <p className='card__button-text'>{infoButtonText}</p>
                      )
                }  
            </div>
            
            <img className='card__img' src={article.urlToImage} alt='Изображение карточки' />
            <div className='card__description'>
                <time className='card__time'>{date}</time>
                <h3 className='card__title'>{`${croppeTitle}...`}</h3>
                <p className='card__text'>{`${croppeText}...`}</p>
                <p className='card__source'>{article.author}</p>
            </div>
        </li>

        
    )
}

export default NewsCard;