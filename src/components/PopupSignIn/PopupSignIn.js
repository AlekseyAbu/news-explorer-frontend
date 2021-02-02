import React from 'react';
import './PopupSignIn.css';

function PopupSignIn({isOpen, isClose, isOpenPopupWithForm, authorize}) {
    const [ data, setData] = React.useState({
        email: '',
        password: ''
    })

    const goToLink = () => {
        isClose();
        isOpenPopupWithForm()
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authorize(data)
    }

    
    return(
        <section className={`popup popup__signin ${isOpen ? 'popup_opened' : ''}`}>
                <div className='popup__container'>
                    <button className='popup__close' onClick={isClose}></button>
                    <h3 className='popup__title'>Вход</h3>
                    <form className='popup__form' onSubmit={handleSubmit}>
                        <p className='popup__input-text'>Email</p>
                        <input type="email" name='email' id='input__email-error' className='popup__input popup__input_email' required defaultValue={data.email} onChange={handleChange}></input>
                        <span id='input__email-error' className="popup__error"></span>
                        <p className='popup__input-text'>Password</p>
                        <input type="password" name='password' id='input__password-error' className='popup__input popup__input_password' required defaultValue={data.password} onChange={handleChange}></input>
                        <span id='input__password-error' className="popup__error"></span>
                        <button className='popup__button'>Войти</button>
                    </form>
                    <p className='popup__footer' >или <button className='popup__link' onClick={goToLink}>Зарегистрироваться</button> </p>
                </div>
            </section>
    )
}

export default PopupSignIn;
