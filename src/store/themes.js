import {makeAutoObservable} from "mobx";

import {themes} from '../api';


class Themes {
    themes = [];

    constructor() {
        makeAutoObservable(this);
    }

    async fetchThemes() {
        const res = await themes.getAllThemes();
        this.themes = res;
    }

    async createTheme(title) {
        await themes.createTheme(title);
    }
}

export default new Themes();