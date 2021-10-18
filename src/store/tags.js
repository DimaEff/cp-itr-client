import {makeAutoObservable} from "mobx";

import {tags} from '../api';


class Tags {
    tags = [];

    constructor() {
        makeAutoObservable(this);
    }

    async fetchTags() {
        const res = await tags.getAllTags();
        this.tags = res;
    }
}

export default new Tags();