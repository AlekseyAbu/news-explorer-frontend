import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Main from '../Main/Main.js'
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchForm from '../SearchForm/SearchForm';
import PopupSignIn from '../PopupSignIn/PopupSignIn';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import PopupUserRegistered from '../PopupUserRegistered/PopupUserRegistered';
import '../../fonts/fonts.css';

function App() {
    // const [ dataCards, setDataCards] = React.useState([]);
    const [ isPopupSignIn, setIsPopupSignIn ] = React.useState(false);
    const [ isPopupWithForm, setIsPopupWithForm] = React.useState(false);
    const [ isPopupUser, setIsPopupUser] = React.useState(false);

    function handleIsPopupSignIn() {
        setIsPopupSignIn(true);
    }
    function handleIsPopupWithForm() {
        setIsPopupWithForm(true);
    }

    function handleIsPopupUser() {
        setIsPopupUser(true);
    }

    function handlePopupClose() {
        setIsPopupSignIn(false);
        setIsPopupWithForm(false);
        setIsPopupUser(false);
    }

    return (
        <div className='body'>
            <Header 
                onSignIn={handleIsPopupSignIn}
            />
            <Switch >
                <Route exact path='/'> 
                    <SearchForm />
                    <Main 
                        
                    />
                </Route>
                <Route path='/saved-news' > 
                    <SavedNewsHeader />
                    <SavedNews />
                </Route>
            </Switch>
            <Footer />
            <PopupSignIn 
                isOpen={isPopupSignIn}
                isClose={handlePopupClose}
                isOpenPopupWithForm={handleIsPopupWithForm}
            />
            <PopupWithForm
                isOpen={isPopupWithForm}
                isClose={handlePopupClose}
                isOpenPopupSignIn={handleIsPopupSignIn}
            />
            <PopupUserRegistered
                isOpen={isPopupUser}
                isClose={handlePopupClose}
                isOpenPopupSignIn={handleIsPopupSignIn}
            />
        </div>
    );
}


export default App;