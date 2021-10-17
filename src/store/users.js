import {makeAutoObservable} from "mobx";

import {users} from '../api';


class Users {
    users = [];
    user = null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchUsers(page, limit) {
        this.users = users.getSomeUsers(page, limit);
    }

    async fetchOneUser(id) {
        this.user = users.getUser(id);
    }

    async setUserRole(user_id, value) {
        await users.setUserRole(user_id, value);
    }

    async banUser(id) {
        await users.setBannedUser(id, true);
    }

    async unbanUser(id) {
        await users.setBannedUser(id, false);
    }

    async deleteUser(id) {
        await users.deleteUser(id);
    }
}

export default new Users();