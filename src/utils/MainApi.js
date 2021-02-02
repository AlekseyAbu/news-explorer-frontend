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

}

const MainApi = new mainApi({
    url: 'http://localhost:3000'
})

export default MainApi;