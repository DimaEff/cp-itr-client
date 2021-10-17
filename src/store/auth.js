import {makeAutoObservable} from 'mobx';

import {auth} from '../api';
import {setInstanceToken} from '../api/instance';


class Auth {
    token = '';
    profile = {};

    constructor() {
        makeAutoObservable(this, {}, {deep: true});
    }

    get isAuth() {
        return !!Object.keys(this.profile).length;
    }

    setToken(token) {
        this.token = token;
        localStorage.setItem('token', this.token);
        setInstanceToken();
    }

    removeToken() {
        this.token = null;
        localStorage.removeItem('token');
        setInstanceToken();
    }

    async fetchProfile() {
        this.profile = await auth.getProfile();
    }
}

export default new Auth();