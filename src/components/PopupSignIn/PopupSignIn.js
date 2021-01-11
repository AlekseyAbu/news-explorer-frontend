import './PopupSignIn.css';


function PopupSignIn(props) {

    
    return(
        <section className='popup popup__signin'>
                <div className='popup_container'>
                    <button className='popup__close'></button>
                    <h3 className='popup__title'>Вход</h3>
                    <form className='popup__form' >
                        <p className='popup__input-text'>Email</p>
                        <input className='popup__input popup__input_email'></input>
                        <p className='popup__input-text'>Password</p>
                        <input className='popup__input popup__input_password'></input>
                        <button className='popup__button'>Войти</button>
                    </form>
                    <p className='popup__footer' >или Зарегистрироваться</p>
                </div>
            </section>
    )
}

export default PopupSignIn;