import './Main.css';
import imgAvatar from '../../images/Yeisk.jpg';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({cardNews, newsCardList, loggedIn, saveCardNews, onSignIn}) {
    return(
        <main className='main'>
        

        <NewsCardList 
            cardNews={cardNews} 
            newsCardList={newsCardList}
            loggedIn={loggedIn}
            saveCardNews={saveCardNews}
            onSignIn={onSignIn}
        />

        <section className='author'>
            {/* <div className='author__img'></div> */}
            <img className='author__img' src={imgAvatar} alt='Аватар' />
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