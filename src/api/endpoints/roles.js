import {instance, Api} from '../instance';


export class Roles extends Api {
    async createRole(value) {
        const res = await instance.post(this.getAdditionalUrl(), {value});
        return res.data;
    }

    async getRoleByValue(value) {
        const res = await instance.get(this.getAdditionalUrl(`/${value}`));
        return res.data;
    }
}

export default new Roles('roles');