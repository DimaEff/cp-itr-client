import {makeAutoObservable} from 'mobx';

import {auth} from '../api';
import {setInstanceToken, removeInstanceToken} from '../api/instance';


class Auth {
    token = '';
    profile = {};
    get isAuth() {
        return !!Object.keys(this.profile).length;
    }

    constructor() {
        makeAutoObservable(this, {}, {deep: true});
    }

    async fetchProfile() {
        this.profile = await auth.getProfile();
    }

    setToken(token) {
        this.token = token;
        localStorage.setItem('token', this.token);
        setInstanceToken();
    }

    removeToken() {
        this.token = '';
        localStorage.removeItem('token');
        removeInstanceToken();
    }

    async login(token) {
        this.setToken(token);
        await this.fetchProfile();
    }

    signOut = () => {
        this.profile = {};
        this.removeToken();
    }
}

export default new Auth();