import {makeAutoObservable} from "mobx";

class TaskModal {
    isOpen = false;
    task = {};

    constructor() {
        makeAutoObservable(this)
    }

    open(task) {
        this.task = task;
        this.isOpen = true;
    }

    close = () => {
        this.isOpen = false;
        this.task = {};
    }
}

export default new TaskModal();