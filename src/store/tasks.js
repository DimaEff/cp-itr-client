import {makeAutoObservable} from "mobx";

import {tasks} from '../api';


class Tasks {
    count = 0;
    tasks = [];

    constructor() {
        makeAutoObservable(this, {}, {deep: true});
    }

    async fetchTasks(page, limit, theme, user_id, tags) {
        const res = await tasks.getSomeTasks(page, limit, theme, user_id, tags);
        this.tasks = res.rows;
        this.count = res.count;
    }

    async createUpdateTask(images, task_id, task, solutions, tags) {
        await tasks.createTask(images, task_id, task, solutions, tags);
    }

    async addTaskRating(rating, task_id, user_id) {
        await tasks.addTaskRating(rating, task_id, user_id);
    }

    async checkSolution(solution, task_id, user_id) {
        return tasks.checkSolution(solution, task_id, user_id);
    }

    async deleteTask(id) {
        await tasks.deleteTask(id);
    }
}

export default new Tasks();