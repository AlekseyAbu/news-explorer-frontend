import './Footer.css';

function Footer(params) {
    return ( 
        <footer className='footer'>
            <p className='footer__copyright'>© 2020 Supersite, Powered by News API</p>
            <ul className='footer__links'>
                <li className='footer__link'><a>Главная</a></li>
                <li className='footer__link'><a>Яндекс.Практикум</a></li>
            </ul>
            <ul className='footer__networks'>
                <li className='footer__network footer__network_git'><a className=''></a> </li>
                <li className='footer__network footer__network_facebook'><a className=''></a></li>
            </ul>
        </footer>
    )
}

export default Footer;