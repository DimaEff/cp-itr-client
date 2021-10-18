import {instance, Api} from '../instance';


class Auth extends Api{
    async googleAuth(token) {
        const response = await instance.post(this.getAdditionalUrl('/google'), {token});
        return response.data;
    }

    async vkAuth(token) {
        const response = await instance.post(this.getAdditionalUrl('/vk'), {token});
        return response.data;
    }

    async getProfile() {
        const res = await instance.get(this.getAdditionalUrl('/profile'));
        return res.data;
    }
}

export default new Auth('auth');