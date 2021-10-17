import {makeAutoObservable} from "mobx";

import {roles} from '../api';


class Roles {
    role = null;

    constructor() {
        makeAutoObservable(this);
    }

    async setRoles() {
        this.role = roles.getAll();
    }

    async createRole(value) {
        await roles.createRole(value);
    }
}

export default new Roles();