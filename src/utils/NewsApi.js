class newsApi {
    constructor({url}){
        this._url = url;
    }

    getNewsInfo(){       
        return fetch(`${this._url}` ,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {     
            if (res.ok) {
                return res.json();
              }
              return Promise.reject(`Error: ${res.status}`);
        }) 
    }

    getSearchNews(keyWord){
        return fetch(`https://nomoreparties.co/news/v2/everything?q=${keyWord}&from=2021-23-02&to=2021-23-02&language=ru&pageSize=10&apiKey=b3701453d6ca442ab895e448e1aeb444` , {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {     
            if (res.ok) {
                return res.json();
              }
              return Promise.reject(`Error: ${res.status}`);
        }) 
    }
}

const NewsApi = new newsApi({
    
    url: 'https://nomoreparties.co/news/v2/everything?q=Apple&from=2021-01-24&to=2021-01-24&language=ru&pageSize=10&apiKey=b3701453d6ca442ab895e448e1aeb444'
});

export default NewsApi;