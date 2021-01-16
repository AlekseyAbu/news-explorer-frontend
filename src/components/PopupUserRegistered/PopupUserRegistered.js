import './PopupUserRegistered.css';


function PopupUserRegistered({isOpen, isClose, isOpenPopupSignIn}) {
    const goToLink = () => {
        isClose();
        isOpenPopupSignIn()
    }
    
    return(
        <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
                <div className='popup_container'>
                    <button className='popup__close' onClick={isClose}></button>
                    <h3 className='popup__title'>Пользователь успешно зарегистрирован!</h3>
                    <button className='popup__link' onClick={goToLink}>Зарегистрироваться</button>
                </div>
            </section>
    )
}

export default PopupUserRegistered;

