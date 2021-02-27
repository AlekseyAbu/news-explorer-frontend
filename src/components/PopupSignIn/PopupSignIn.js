import React from 'react';
import './PopupSignIn.css';
import { FormValidation } from '../FormValidation/FormValidation';

function PopupSignIn({isOpen, isClose, isOpenPopupWithForm, authorize}) {
    const email = FormValidation();
    const password = FormValidation();

    const goToLink = () => {
        isClose();
        isOpenPopupWithForm()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email.value, password.value)
        authorize(email.value, password.value)
    }
    
    return(
        <section className={`popup popup__signin ${isOpen ? 'popup_opened' : ''}`}>
                <div className='popup__container'>
                    <button className='popup__close' onClick={isClose}></button>
                    <h3 className='popup__title'>Вход</h3>
                    <form className='popup__form' onSubmit={handleSubmit}>

                        <p className='popup__input-text'>Email</p>
                        <input type="email" name='email' id='input__email-error' className='popup__input popup__input_email' 
                            required 
                            onChange={email.onChange}
                            value={email.value}
                        ></input>
                        <span id='input__email-error' className="popup__error">{email.errorMessage}</span>

                        <p className='popup__input-text'>Password</p>
                        <input type="password" name='password' id='input__password-error' className='popup__input popup__input_password' 
                            required 
                            onChange={password.onChange} 
                            value={password.value}
                            minLength="6"
                        ></input>
                        <span id='input__password-error' className="popup__error">{password.errorMessage}</span>

                        <button className={`popup__button ${email.isValid && password.isValid ? '' : 'popup__button_disabled'}`}>Войти</button>
                    </form>
                    <p className='popup__footer' >или <button className='popup__link' onClick={goToLink}>Зарегистрироваться</button> </p>
                </div>
            </section>
    )
}

export default PopupSignIn;
