import './Main.css';
import imgAvatarka from '../../images/Yeisk.jpg';

function Main(props) {
    return(
        <main className='main'>
        <section className='search'>
            <h1 className='search__title'>Что творится в мире?</h1>
            <p className='search__subtitle'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
            <form className='search__form'>
                    <input className='search__input' placeholder='Введите тему новости'></input>
                    <button className='search__button' >Искать</button>
            </form>
        </section> 

        <section className='author'>
            {/* <div className='author__img'></div> */}
            <img className='author__img' src={imgAvatarka} alt='Аватарка' />
            <div className='author__text'>
                <h2 className='author__title'>Об авторе</h2>
                <p className='author__subtitle'>Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.
                    Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
            </div>
        </section>
       </main>
    )
}

export default Main;