export function saveToLocalStorage(key, value) {
    console.log("saveTo -> ",  value);
    localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}
