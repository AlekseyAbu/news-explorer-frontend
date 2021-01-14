import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Main from '../Main/Main.js'
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchForm from '../SearchForm/SearchForm';

function App() {
    // const [ dataCards, setDataCards] = React.useState([]);


    return (
        <div className='body'>
            <Header />
            <Switch >
                <Route exact path='/'> 
                    <SearchForm />
                    <Main />
                </Route>
                <Route path='/saved-news' > 
                    <SavedNewsHeader />
                    <SavedNews />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}


export default App;