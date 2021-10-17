import {instance, Api} from '../instance';


export class Tasks extends Api {
    async getSomeTasks(page, limit, theme, user_id, tags) {
        const res = await instance.post(this.getAdditionalUrl(`?page=${page}&limit=${limit}`), {
            theme,
            user_id,
            tags,
        });
        return res.data;
    }

    async createTask(images, task_id, task, solutions, tags) {
        const res = await instance.post(this.getAdditionalUrl('/create'), {
            images,
            task_id,
            task,
            solutions,
            tags,
        });
        return res.data;
    }

    async deleteTask(id) {
        const res = await instance.delete(this.getAdditionalUrl(`/${id}`));
        return res.data;
    }

    async checkSolution(solution, task_id, user_id) {
        const res = await instance.post(this.getAdditionalUrl('/solutions/check'), {
            solution,
            task_id,
            user_id,
        });
        return res.data;
    }
}

export default new Tasks('tasks');