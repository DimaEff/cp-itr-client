import axios from "axios";


export const instance = axios.create({
    baseURL: `http://localhost:7000`,
});

export const setInstanceToken = () => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token') || ''}`;
}
setInstanceToken();

export const removeInstanceToken = () => {
    instance.defaults.headers.common['Authorization'] = `''`;
}


export class Api {
    constructor(url) {
        this._url = url;
    }

    getAdditionalUrl(url = '') {
        return this._url + url;
    }
}