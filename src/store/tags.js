import {makeAutoObservable} from "mobx";

import {tags} from '../api';


class Tags {
    tags = null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchTags() {
        this.tags = tags.getAllTags();
    }
}