import './PopupWithForm.css';


function PopupWithForm({isOpen, isClose, isOpenPopupSignIn}) {

    const goToLink = () => {
        console.log('hey')
        isClose();
        isOpenPopupSignIn()
    }
    
    return(
        <section className={`popup popup__signup ${isOpen ? 'popup_opened' : ''}`}>
                <div className='popup__container'>
                    <button className='popup__close' onClick={isClose}></button>
                    <h3 className='popup__title'>Вход</h3>
                    <form className='popup__form' >
                        <p className='popup__input-text'>Email</p>
                        <input className='popup__input popup__input_email' required></input>
                        <p className='popup__input-text'>Password</p>
                        <input className='popup__input popup__input_password' required></input>
                        <p className='popup__input-text'>Name</p>
                        <input className='popup__input popup__input_name' required></input>
                        <button className='popup__button'>Войти</button>
                    </form>
                    <p className='popup__footer' >или <button className='popup__link' onClick={goToLink}>Войти</button> </p>
                </div>
            </section>
    )
}

export default PopupWithForm;