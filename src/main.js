import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



document.addEventListener('DOMContentLoaded', () => {
  // const searchById = document.getElementById('js-comments');
  // generatePosts.addEventListener('click', getComments);
  const generatePosts = document.getElementById('js-posts');
  generatePosts.addEventListener('click', getPostsData);
});

document.addEventListener('DOMContentLoaded', () => {
  const searchById = document.getElementById('js-comments');
  searchById.addEventListener('click', getCommentsById);

});

let getCommentsById = () =>
{
  const givenId = document.getElementById('inputId').value;
  console.log(givenId);
  let url = `https://jsonplaceholder.typicode.com/posts/${givenId}/comments`;
  console.log(url);
  fetch(url)
  .then((data) => data.json())
  .then((data) => getComments(data));
}

let getPostsData = () =>
{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((data) => data.json())
  .then((data) => getPosts(data));

}




let getComments = (comments) =>
{
  let index = 0;
  let comment;
  let ul = document.getElementById('comments');
  while(index<comments.length)
  {
    comment = comments[index];
    let li = document.createElement('li');
    let postId = document.createElement('p');
    let id = document.createElement('p');
    let name = document.createElement('p');
    let email = document.createElement('p');
    let body = document.createElement('p');
    postId.innerText = "PostId: "+ comment.postId;
    id.innerText = "Id: " + comment.id;
    name.innerText = "Name: " + comment.name;
    email.innerText = "Email: " + comment.email;
    body.innerText = "Body: " + comment.body;
    li.appendChild(postId);
    li.appendChild(id);
    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(body);
    ul.appendChild(li);
    index++;



  }
}
/*Get photos*/

// let getPhotos = (data) =>
// {
//     for(let idx=0; idx<100; idx++)
//     {
//       let picture = data[idx];
//       let imgTag = document.createElement('img');
//       imgTag.src = picture.thumbnailUrl;
//       document.body.appendChild(imgTag);
//     }
//
// }

/*Get Posts*/

let getPosts = (posts) =>{
  let idx = 0;
  let ul = document.getElementById('posts');
  let post;
  while(idx<posts.length){
    post = posts[idx];
    let li = document.createElement('li');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    h3.innerText = post.title;
    p.innerText = post.body;
    li.id = post.id;
    li.appendChild(h3);
    li.appendChild(p);
    ul.appendChild(li);
    li.addEventListener('click',function(event){
      onSelectTitle(posts,event);
    });
    idx = idx + 1;
  }

}
/*Event listner*/
let onSelectTitle = (posts,event) => {
  let postId = parseInt(event.currentTarget.id);
  let index = 0;
  while(index < posts.length)
  {
    if(posts[index].id==postId)
    {
      document.getElementById('title').innerHTML = posts[index].title;
      document.getElementById('user').innerHTML = posts[index].userId;
      document.getElementById('body').innerHTML = posts[index].body;
      index = posts.length;
    }
    index++;
  }

}
