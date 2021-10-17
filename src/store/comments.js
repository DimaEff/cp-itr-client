import {makeAutoObservable} from "mobx";

import {comments} from '../api';


class Comments {
    comments = [];

    constructor() {
        makeAutoObservable(this, {}, {deep: true});
    }

    async fetchTaskComments(task_id) {
        this.comments = comments.getTaskComments(task_id);
    }

    async addComment(text, task_id, user_id) {
        await comments.addComment(text, task_id, user_id);
    }
    
    async addCommentRating(rating, comment_id, user_id) {
        await comments.addCommentRating(rating, comment_id, user_id);
    }
}

export default new Comments();