import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main.js'
import Footer from '../Footer/Footer.js';

function App() {



    return (
        <div className='body'>
            <h1> Hello world! </h1>
            <Switch >
                <Route path='/'> 
                { /* //main */} 
                <Main />
                </Route>
                <Route path='/saved-news' > { /* //saved-news */} </Route>
            </Switch>
            <Footer />
        </div>
    );
}



export default App;