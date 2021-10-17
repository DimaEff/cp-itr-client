import {instance, Api} from '../instance';


export class Themes extends Api {
    async createTheme(title) {
        const res = await instance.post(this.getAdditionalUrl(), {title});
        return res.data;
    }

    async getAllThemes() {
        const res = await instance.get(this.getAdditionalUrl());
        return res.data;
    }
}

export default new Themes('themes');