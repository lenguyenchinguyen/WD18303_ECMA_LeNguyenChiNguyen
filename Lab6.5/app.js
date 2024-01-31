import Comment from "./comment.js";

let apiCaller = new Comment('http://localhost:3000','comments');

apiCaller.getAll().then(comments => console.log('All Comments:', comments));

apiCaller.getOne(1).then(comment => console.log('Comment with id = 1:', comment));
 