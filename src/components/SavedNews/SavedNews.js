import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard.js';
import '../NewsCard/NewsCard.css';

function SavedNews(params) {
    const text = 'Название селения известно с 1469 года в форме Чебоксар, происходит от гидронима реки Чебоксарки, в устье которой находится город. В основе гидронима распространённое у марийцев и мордвы дохристианское личное имя «Чебак» (вариант — «Чебакса»)[5], к которому добавляется компонент -ар, происходящий из древних финно-угорских языков. Таким образом, «Чебоксарка» — «река Чебака». В диалектах чувашского языка ойконим звучит как «Шобашкар», современная литературная чувашская форма — «Шупашкар». По оценке В. А. Никонова, ойконим может происходить из марийского шобакшенгер. где шобакш — «кадушка, бурак из бересты при языческих моленьях», а енгер — «ручей, речка»[6].В начале XX века в употреблении закрепилась форма множественного числа — Чебоксары[7].'
    const croppeText = text.substring(0, 160);


    return(
        <section className='saved-news'>
            <ul className='saved-news__lists'>
                <NewsCard />
                <li className='card'>
            <button className='card__button-save'></button>
            <img className='card__img' src='https://cdn.sozvezdie-tour.ru/images/uploadedfiles/12502353-4fbf-4951-99b4-e3c7dd0879fb.jpg' alt='' />
            <div className='card__description'>
                <time className='card__time'>21.03.1997</time>
                <h3 className='card__title'>Чебоксары</h3>
                <p className='card__text'>{`${croppeText}...`}</p>
                <p className='card__source'>Википедия</p>
            </div>
        </li>
        <li className='card'>
            <button className='card__button-save'></button>
            <img className='card__img' src='https://cdn.sozvezdie-tour.ru/images/uploadedfiles/12502353-4fbf-4951-99b4-e3c7dd0879fb.jpg' alt='' />
            <div className='card__description'>
                <time className='card__time'>21.03.1997</time>
                <h3 className='card__title'>Чебоксары</h3>
                <p className='card__text'>{`${croppeText}...`}</p>
                <p className='card__source'>Википедия</p>
            </div>
        </li>
        <li className='card'>
            <button className='card__button-save'></button>
            <img className='card__img' src='https://cdn.sozvezdie-tour.ru/images/uploadedfiles/12502353-4fbf-4951-99b4-e3c7dd0879fb.jpg' alt='' />
            <div className='card__description'>
                <time className='card__time'>21.03.1997</time>
                <h3 className='card__title'>Чебоксары</h3>
                <p className='card__text'>{`${croppeText}...`}</p>
                <p className='card__source'>Википедия</p>
            </div>
        </li>

            </ul>
        </section>
    )
}

export default SavedNews;