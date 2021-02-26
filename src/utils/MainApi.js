import { getToken } from '../utils/Token';

class mainApi {
    constructor({url}) {
        this._url = url;
    }

    register({email, password, name}) {
        console.log(this._url)
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {     
                'Accept': 'application/json',  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, name })
        })
        .then((response) => {
            if (response.ok) {
                console.log(response)
                return response.json();
            }
            Promise.reject(`Ошибка: ${response.status}`)
        })  
    }

    authorize({email, password}) {
        return fetch(`${this._url}/signin`,{
            method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'     
        },
        body: JSON.stringify({ email, password })
    })
        .then((response) => {
            if(response.ok){
                return response.json()
            }
            Promise.reject(`Ошибка: ${response.status}`)
        })
        .then((data) => {
            console.log(data)
            if (data) {
                console.log(data)
                // setToken(data.token);
                return data;
            } else {
                return;
            }
        }) 
    }

    getContent(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then((response => {
            
            if(response.ok){
                return response.json()
            }
            Promise.reject(`Ошибка: ${response.status}`)
        }))
    }

    saveArticle(data, keyWord){
        const jwt = getToken();
        console.log(keyWord)
        const articles ={ 
            keyword: keyWord, 
            title: data.title, 
            text: data.description, 
            date: data.publishedAt, 
            source: data.author, 
            link: data.url, 
            image: data.urlToImage
        }
        return fetch(`${this._url}/articles`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
            body: JSON.stringify(articles)
        })
        .then(res => {
            if(res.ok){
                return res.json()
            }
            Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    getArticle(){
        const jwt = getToken();
        return fetch(`${this._url}/articles`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            }
        })
        .then(res => {
            if(res.ok){
                return res.json()
            }
            Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    deleteArticle(articleID) {
        console.log(articleID)
        const jwt = getToken();
        return fetch(`${this._url}/articles/${articleID}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            }
        })
        .then(res => {
            if(res.ok){
                return res.json()
            }
            Promise.reject(`Ошибка: ${res.status}`)
        })
    }

}

const MainApi = new mainApi({
    // url: 'http://localhost:3000'
    url: 'https://api.diplomabualeksey.students.nomoreparties.space'
})

export default MainApi;