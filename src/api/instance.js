import axios from "axios";


export const instance = axios.create({
    baseURL: `http://localhost:5000/`,
});

export const setInstanceToken = () => {
    console.log(localStorage.getItem('token'));
    instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token') || ''}`;
}
setInstanceToken();

export class Api {
    constructor(url) {
        this._url = url;
    }

    getAdditionalUrl(url = '') {
        return this._url + url;
    }
}