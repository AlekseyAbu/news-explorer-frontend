import './Preloader.css';

function Preloader({preloader}) {
    

    return(
        <template className={`${preloader ? 'preloader' : ''}`}>
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>        
        </template>
    )
};

export default Preloader;