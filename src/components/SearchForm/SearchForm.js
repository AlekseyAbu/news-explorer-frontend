import './SearchForm.css';

function SearchForm(params) {
    return(
        <section className='search'>
            <h1 className='search__title'>Что творится в мире?</h1>
            <p className='search__subtitle'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
            <form className='search__form'>
                    <input className='search__input' placeholder='Введите тему новости'></input>
                    <button className='search__button' >Искать</button>
            </form>
        </section> 
    )
}

export default SearchForm;