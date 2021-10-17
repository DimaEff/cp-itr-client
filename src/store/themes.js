import {makeAutoObservable} from "mobx";

import {themes} from '../api';


class Themes {
    themes = [];

    constructor() {
        makeAutoObservable(this);
    }

    async fetchThemes() {
        this.themes = themes.getAllThemes();
    }

    async createTheme(title) {
        await themes.createTheme(title);
    }
}

export default new Themes();