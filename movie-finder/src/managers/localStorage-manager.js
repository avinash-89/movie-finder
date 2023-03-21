export function setValueInLocalStorage(key , val){
    localStorage.setItem(key, JSON.stringify(val));
}

export function getValueFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}