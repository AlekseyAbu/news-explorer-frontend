import './Preloader.css';

function Preloader({preloader}) {
    

    return(
        // <template className={`${preloader ? 'preloader' : ''}`}>
        //     <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>        
        // </template>
        <div className={`${preloader ? 'preloader' : 'preloader_none'}`}>
             {/* <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>  */}
             <div class="preloader__loader"></div>
             <p className='preloader__text'>Идет поиск новостей...</p>
        </div>
    )
};

export default Preloader;