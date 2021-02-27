const KEY = 'card';

export const setCard = (data) => localStorage.setItem(KEY, data);

export const getCard = () => localStorage.getItem(KEY);

export const removeCard = () =>  localStorage.removeItem(KEY);
