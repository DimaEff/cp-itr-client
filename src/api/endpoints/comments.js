import {instance, Api} from '../instance';


export class Comments extends Api{
    async addComment(text, task_id, user_id) {
        const res = await instance.post(this.getAdditionalUrl('/create'), {
            text,
            task_id,
            user_id,
        });
        return res.data;
    }

    async getTaskComments(task_id) {
        const res = await instance.get(this.getAdditionalUrl(`/${task_id}`));
        return res.data;
    }

    async addCommentRating(rating, comment_id, user_id) {
        const res = await instance.post(this.getAdditionalUrl(this.getAdditionalUrl('/rating')), {
            rating,
            comment_id,
            user_id,
        });
        return res.data;
    }
}

export default new Comments('tasks/comments');