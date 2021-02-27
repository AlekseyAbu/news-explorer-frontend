import  React  from 'react';
import './PopupWithForm.css';
import { FormValidation } from '../FormValidation/FormValidation';

function PopupWithForm({isOpen, isClose, isOpenPopupSignIn, register, errorMessage}) {
    // const [ data, setData] = React.useState({
    //     email: '',
    //     password: '',
    //     name: ''
    // })
    const email = FormValidation();
    const password = FormValidation();
    const name = FormValidation();

    const goToLink = () => {
        isClose();
        isOpenPopupSignIn()
    }

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        register(email.value, password.value, name.value)
    }
    
    return(
        <section className={`popup popup__signup ${isOpen ? 'popup_opened' : ''}`}>
                <div className='popup__container'>
                    <button className='popup__close' onClick={isClose}></button>
                    <h3 className='popup__title'>Зарегистрироваться</h3>
                    <form className='popup__form' onSubmit={handleSubmit}>

                        <p className='popup__input-text'>Email</p>
                        <input type="email" name='email' className='popup__input popup__input_email' id='input__email-error'
                            required 
                            value={email.value} 
                            onChange={email.onChange}
                        ></input>
                        <span id='input__email-error' className="popup__error">{email.errorMessage}</span>

                        <p className='popup__input-text'>Password</p>
                        <input type="password" name='password' className='popup__input popup__input_password' id='input__password-error'
                            required 
                            value={password.value} 
                            onChange={password.onChange} 
                            minLength="6"
                        ></input>
                        <span id='input__password-error' className="popup__error">{password.errorMessage}</span>

                        <p className='popup__input-text'>Name</p>
                        <input type="name" name='name' className='popup__input popup__input_name' id='input__name-error'
                            required 
                            value={name.value} 
                            onChange={name.onChange} 
                            minLength="2" 
                            maxLength="30"
                        ></input>
                        <span id='input__name-error' className="popup__error">{name.errorMessage}</span>

                        <button className={`popup__button ${email.isValid && password.isValid && name.isValid ? '' : 'popup__button_disabled'}`}>Зарегистрироваться</button>
                    </form>
                    <p className='popup__footer' >или <button className='popup__link' onClick={goToLink}>Войти</button> </p>
                </div>
            </section>
    )
}

export default PopupWithForm;