import {makeAutoObservable} from "mobx";

class Fetching {
    startedFetch = 0;
    isFetching = false;

    constructor() {
        makeAutoObservable(this);
    }

    fetchingWrapper = (func) => async (...args) => {
        this._startFetching();
        const res = await func(...args);
        this._endFetching()
        return res;
    }

    _startFetching() {
        this.startedFetch += 1;
        this.isFetching = true;
    }

    _endFetching() {
        if (this.startedFetch !== 0) this.startedFetch -= 1;
        if (this.startedFetch === 0) this.isFetching = false;
    }
}

export default new Fetching();