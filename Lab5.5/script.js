

// class APICaller {
//      constructor (baseUrl){
//         this.baseUrl = baseUrl;
//      }
//      get(endpoint){
//         return fetch (this.baseUrl + endpoint)
//             .then ((response) =>{
//                  if(response.status === 200){
//                      return response.data;
//                 }else {
//                     throw new Error (response.statusText);
//                 }
//             });
//      }
// }
// class Comment extends APICaller {
//     constructor(baseUrl){
//         super(baseUrl)
//         this.endpoint = "/comments";
//     }
//     getOne(id){
//         return super.get(`${this.endpoint}/${id}`);
//     }
//     getAll(){
//         return super.get(`${this.endpoint}`);
//     }
// }

// let commentAPI = new Comment("http://localhost:3000");
// let oneCmt = commentAPI.getOne(1);
// let allCmt = commentAPI.getAll();

// console.log(commentAPI.getOne(1));
// console.log(commentAPI.getAll());


class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint) {
            let response = await fetch(`${this.baseUrl}/${endpoint}`);
            let data = await response.json();
            return data;
    }
}

class Comment extends APICaller {
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

// Example usage
let apiCaller = new Comment('http://localhost:3000');

apiCaller.getAll().then(comments => console.log('All Comments:', comments));

apiCaller.getOne(1).then(comment => console.log('Comment with id = 1:', comment));


class Post extends APICaller {
    constructor(baseUrl) {
        super(baseUrl);
        this.endpoint = 'Posts';
    }

    async getAll() {
            let Posts = await this.get(this.endpoint);
            return Posts;
    }

    async getOne(Id) {
            let Post = await this.get(`${this.endpoint}/${Id}`);
            return Post;
    }
}

// Example usage
let apiCallerp = new Post('http://localhost:3000');

apiCallerp.getAll().then(Posts => console.log('All Posts:', Posts));

apiCallerp.getOne(1).then(Post => console.log('Post 1:', Post));































