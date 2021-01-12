import './SavedNewsHeader.css';

function SavedNewsHeader(params) {
    return(
        <div className='save-news-header'>
            <p className='save-news-header__text'>Сохранённые статьи</p>
            <h2 className='save-news-header__title'>Грета, у вас 5 сохранённых статей</h2>
            <p className='save-news-header__keywords'>{`По ключевым словам: `}</p>
        </div>
    )
}

export default SavedNewsHeader;