const TOKEN_KEY = 'jwt';

export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  }
  
  export const getToken = () => localStorage.getItem(TOKEN_KEY);
  
  export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY)
  }

export const setCard = (data) => {
    const {keyItem, item } = data;
    
    const dataCardMassive = []
    dataCardMassive.push(item)
    const dataCardJSON = JSON.stringify(dataCardMassive);
    localStorage.setItem(keyItem, dataCardJSON);
}

export const getCard = (key) => {
    localStorage.getItem(key)
    const dataCard = JSON.parse(localStorage.getItem(key))
    
    return dataCard
} 
