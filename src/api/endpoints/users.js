import {instance, Api} from "../instance";


export class Users extends Api {
    async getSomeUsers(page, limit) {
        const response = await instance.get(this.getAdditionalUrl(`?page=${page}&limit=${limit}`));
        return response.data;
    }

    async getUser(id) {
        const res = await instance.get(this.getAdditionalUrl(`/${id}`));
        return res.data;
    }

    async setUserRole(user_id, value) {
        const res = await instance.post(this.getAdditionalUrl('role'), {user_id, value});
        return res.data;
    }

    async setBannedUser(user_id, banned) {
        const res = await instance.post(this.getAdditionalUrl('ban'), {user_id, banned});
        return res.data;
    }

    async deleteUser(id) {
        return instance.delete(this.getAdditionalUrl(`/delete/${id}`));
    }
}

export default new Users('users');