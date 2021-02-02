import './PopupUserRegistered.css';


function PopupUserRegistered({isOpen, isClose, isOpenPopupSignIn}) {
    const goToLink = () => {
        isClose();
        isOpenPopupSignIn()
    }
    
    return(
        <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
                <div className='popup__container popup__container_user'>
                    <button className='popup__close' onClick={isClose}></button>
                    <h3 className='popup__title'>Пользователь успешно зарегистрирован!</h3>
                    <button className='popup__link' onClick={goToLink}>Войти</button>
                </div>
            </section>
    )
}

export default PopupUserRegistered;

