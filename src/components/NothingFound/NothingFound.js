import React from 'react';
import './NothingFound.css';
import img from '../../images/not-found_v1.svg'

function NothingFound({nothingFound}){

    return(
        <div className={`${nothingFound ? 'nothing-found' : 'nothing-found_none'}`}>
            <img className='nothing-found__img' src={img} alr='Не найдено'></img>
            <p className='nothing-found__title'>Ничего не найдено</p>
            <p className='nothing-found__text'>К сожалению по вашему запросу 
ничего не найдено.</p>
        </div>
    )
}

export default NothingFound;