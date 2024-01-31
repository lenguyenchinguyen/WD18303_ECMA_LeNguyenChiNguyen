import APICaller from "./API.js";

export default class Comment extends APICaller {
    constructor(baseUrl) {
        super(baseUrl);
        this.endpoint = 'comments';
    }

    async getAll() {
            let comments = await this.get(this.endpoint);
            return comments;
    }

    async getOne(commentId) {
            let comment = await this.get(`${this.endpoint}/${commentId}`);
            return comment;
    }
}