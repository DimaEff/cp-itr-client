import {makeAutoObservable} from "mobx";

import {tasks} from '../api';


class Tasks {
    tasks = null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchTasks(page, limit, theme, user_id, tags) {
        const tasks = await tasks.getSomeTasks(page, limit, theme, user_id, tags);
        this.tasks = tasks;
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