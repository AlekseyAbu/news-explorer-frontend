import './PopupSignIn.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { Link } from 'react-router-dom';

function PopupSignIn({isOpen, isClose, isOpenPopupWithForm}) {
    const goToLink = () => {
        console.log('hey')
        isClose();
        isOpenPopupWithForm()
    }

    
    return(
        <section className={`popup popup__signin ${isOpen ? 'popup_opened' : ''}`}>
                <div className='popup_container'>
                    <button className='popup__close' onClick={isClose}></button>
                    <h3 className='popup__title'>Вход</h3>
                    <form className='popup__form' >
                        <p className='popup__input-text'>Email</p>
                        <input className='popup__input popup__input_email'></input>
                        <p className='popup__input-text'>Password</p>
                        <input className='popup__input popup__input_password'></input>
                        <button className='popup__button'>Войти</button>
                    </form>
                    <p className='popup__footer' >или <button className='popup__link' onClick={goToLink}>Зарегистрироваться</button> </p>
                </div>
            </section>
    )
}

export default PopupSignIn;