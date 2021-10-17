import {instance, Api} from '../instance';


export class Tags extends Api {
    async getTags() {
        const response = await instance.get(this.getAdditionalUrl());
        return response.data;
    }
}

export default new Tags('tags');