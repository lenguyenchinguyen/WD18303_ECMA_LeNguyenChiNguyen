

// export class List {
//     constructor(baseUrl) {
//         this.baseUrl = baseUrl;
//         this.endpoint = 'comments';
//     }

//     async get(url) {
//         try {
//             const response = await axios.get(this.baseUrl + url);
//             return response.data;
//         } catch (error) {
//             console.error('Lỗi khi gọi API:', error);
//             throw error; // Re-throw error for handling in calling code
//         }
//     }

//     async getAll() {
//         let comments = await this.get(this.endpoint);
//         return comments;
//     }

//     async getOne(commentId) {
//         let comment = await this.get(`${this.endpoint}/${commentId}`);
//         return comment;
//     }
// }
// const commentList = new List('http://localhost:3000');
// commentList.getAll().then(comments => console.log('All Comments:', comments));
// commentList.getOne(1).then(comment => console.log('Comment with id = 1:', comment));
// failed

export class List{
    constructor(){
        console.log('list');
    }
}