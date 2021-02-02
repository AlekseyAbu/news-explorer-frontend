import  React  from 'react';
import './PopupWithForm.css';

function PopupWithForm({isOpen, isClose, isOpenPopupSignIn, register, errorMessage}) {

    const [ data, setData] = React.useState({
        email: '',
        password: '',
        name: ''
    })

    const goToLink = () => {
        isClose();
        isOpenPopupSignIn()
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
        register(data)
    }
    
    return(
        <section className={`popup popup__signup ${isOpen ? 'popup_opened' : ''}`}>
                <div className='popup__container'>
                    <button className='popup__close' onClick={isClose}></button>
                    <h3 className='popup__title'>Вход</h3>
                    <form className='popup__form' onSubmit={handleSubmit}>
                        <p className='popup__input-text'>Email</p>
                        <input type="email" name='email' className='popup__input popup__input_email' required defaultValue={data.email} onChange={handleChange}></input>
                        <p className='popup__input-text'>Password</p>
                        <input type="password" name='password' className='popup__input popup__input_password' required defaultValue={data.password} onChange={handleChange}></input>
                        <p className='popup__input-text'>Name</p>
                        <input type="name" name='name' className='popup__input popup__input_name' required defaultValue={data.name} onChange={handleChange}></input>
                        <button className='popup__button'>Войти</button>
                    </form>
                    <p className='popup__footer' >или <button className='popup__link' onClick={goToLink}>Войти</button> </p>
                </div>
            </section>
    )
}

export default PopupWithForm;