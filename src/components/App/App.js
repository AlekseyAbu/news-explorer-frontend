import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main.js'
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';

function App() {



    return (
        <div className='body'>
            <Header />
            <Switch >
                <Route path='/'> 
                <Main />
                </Route>
                <Route path='/saved-news' > { /* //saved-news */} </Route>
            </Switch>
            <Footer />
        </div>
    );
}


export default App;