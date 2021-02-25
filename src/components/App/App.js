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
    const [ saveNews, setSaveNews ] = React.useState([]);
    const [ infoUser, setInfoUser ] = React.useState({})
    const [ preloader, setPreloader ] = useState(false);
    const [ newsCardList, setNewsCardList ] = useState(false);
    const [ keyWord, setKeyWord ] = useState();
    const [ errorMessage, setErrorMessage ] = useState('');
    const [ userData, setUserData ] = useState('');
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ isStateSave, setIsStateSave ] = useState(false);
    const [ nothingFound, setNothingFound] = useState(false);
   

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
        getSaveCardNews();
        tokenCheck();
        NewsApi.getNewsInfo()
        .then(res => {
                setCardNews(res.articles)
            })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log('pognali')
        tokenCheck();
    }, [])

    function searchKeyWord(keyWord) {
        setKeyWord(keyWord)
        setPreloader(true);
        setNothingFound(false);
        NewsApi.getSearchNews(keyWord)
            .then(res => {
                if(res.totalResults === 0){
                    setNothingFound(true)
                } else{
                    setNothingFound(false);
                }
                
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

    //сохраняем карточки
    function saveCardNews(data) {
        MainApi.saveArticle(data, keyWord)
            .then(newArticles => {
                setSaveNews([newArticles, ...saveNews])
            })
            .catch(err => console.error(err))
    }

    //получаем сохраненые карточки
    function getSaveCardNews() {
        MainApi.getArticle()
            .then(data => {
                console.log(data)
                setSaveNews(data)
            })
            .catch(err => console.error(err))
    }

    //удаление картчоки
    function deleteSaveCard(articleID) {
        console.log(articleID)
        MainApi.deleteArticle(articleID)
            .then(() => {
                console.log('hey')
                const saveArticle = saveNews.filter(item => item._id !== articleID)
                setSaveNews(saveArticle)
            })
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
                saveNews={saveNews}
            />
            {/* < Preloader 
                preloader={preloader}
            /> */}
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
                      onSignIn={handleIsPopupSignIn}
                      preloader={preloader}
                      nothingFound={nothingFound}
                    />
                </Route>
                <ProtectedRoute 
                    path='/saved-news'
                    loggedIn={loggedIn}
                    component={SavedNews}
                    saveNews={saveNews}
                    deleteSaveCard={deleteSaveCard}
                    onSignIn={handleIsPopupSignIn}
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