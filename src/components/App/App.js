import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from '../Main/Main.js'
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchForm from '../SearchForm/SearchForm';
import PopupSignIn from '../PopupSignIn/PopupSignIn';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import PopupUserRegistered from '../PopupUserRegistered/PopupUserRegistered';
import  NewsApi  from '../../utils/NewsApi.js';
import '../../fonts/fonts.css';
import { CurrentUserContext } from '../Contexts/contexts';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import MainApi from '../../utils/MainApi';
import {
    setToken,
    getToken,
    removeToken
} from '../../utils/Token';

function App() {
    const [ isPopupSignIn, setIsPopupSignIn ] = React.useState(false);
    const [ isPopupWithForm, setIsPopupWithForm] = React.useState(false);
    const [ isPopupUser, setIsPopupUser] = React.useState(false);
    const [ cardNews, setCardNews ] = React.useState([]);
    const [ infoUser, setInfoUser ] = React.useState({})
    const [ preloader, setPreloader ] = useState(false);
    const [ newsCardList, setNewsCardList ] = useState(false);
    const [ keyWord, setKeyWord ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');
    const [ userData, setUserData ] = useState('');
    const [ loggedIn, setLoggedIn ] = useState(false);
   

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

    useEffect(() => {
        tokenCheck();
        NewsApi.getNewsInfo()
        .then(res => {
                setCardNews(res.articles)
                
            })
        .catch(err => console.log(err))
    }, [])

    function searchKeyWord(keyWord) {
        setPreloader(true);
        NewsApi.getSearchNews(keyWord)
            .then(res => {
                setPreloader(false);
                setCardNews(res.articles)
                setNewsCardList(true);
            })
            .catch(err => console.log(err))
    }

    function register({email, password, name}) {
        MainApi.register({email, password, name})
            .then(res => {
                console.log(res)
                if(res.status !== 400){
                    setIsPopupWithForm(false);
                    setIsPopupUser(true);
                    console.log('is ok');
                }   
                else(
                    setErrorMessage('Что-то пошло не так')
                    
                )
            })
            .catch(err => console.log(err))
    }
   
    function authorize({email, password}) {
        MainApi.authorize({email, password})
            .then(res => {
                if(!res){
                    setErrorMessage('Что-то пошло не так')
                }
                if(res.token){
                    setToken(res.token);
                    setIsPopupSignIn(false);
                    console.log(res)
                }
            })
            .catch(err => console.log(err))
    }

    function tokenCheck() {
        const jwt = getToken();

        if (!jwt) {
            removeToken(jwt);
            return;
        }

        MainApi.getContent(jwt)
            .then(res => {
                if (res) {
                    const userData = {
                        name: res.name
                    }
                    setUserData(userData);
                    setLoggedIn(true);
                }
            })
    }

    function saveCardNews(data) {
        const jwt = getToken();
        MainApi.saveArticle({data, jwt})
            .then(newArticles => {
                const NewArticles = cardNews.map(articles => articles.url !== data.url ? articles : newArticles)
                setCardNews(NewArticles)
                console.log(NewArticles)
            })
            .catch(err => console.error(err))
    }
    

    return (
        <CurrentUserContext.Provider value={infoUser}>
        <div className='body'>
            <Header 
                onSignIn={handleIsPopupSignIn}
                loggedIn={loggedIn}
                userData={userData}
            />
            <SavedNewsHeader
            />
            < Preloader 
                preloader={preloader}
            />
            <Switch >
                <Route exact path='/'> 
                    <SearchForm 
                        searchKeyWord={searchKeyWord}
                    />
                    <Main 
                      cardNews={cardNews}  
                      newsCardList={newsCardList}
                      loggedIn={loggedIn}
                      saveCardNews={saveCardNews}
                    />
                </Route>
                <ProtectedRoute 
                    path='/saved-news'
                    loggedIn={loggedIn}
                    component={SavedNews}
                />
            </Switch>
            <Footer />
            <PopupSignIn 
                isOpen={isPopupSignIn}
                isClose={handlePopupClose}
                isOpenPopupWithForm={handleIsPopupWithForm}
                authorize={authorize}
            />
            <PopupWithForm
                isOpen={isPopupWithForm}
                isClose={handlePopupClose}
                isOpenPopupSignIn={handleIsPopupSignIn}
                register={register}
                errorMessage={errorMessage}
            />
            <PopupUserRegistered
                isOpen={isPopupUser}
                isClose={handlePopupClose}
                isOpenPopupSignIn={handleIsPopupSignIn}
            />
        </div>
        </CurrentUserContext.Provider>
    );
}


export default App;