import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('js-posts');
  const generatePhotos = document.getElementById('js-comments');
  generateButton.addEventListener('click', getData);
  generatePhotos.addEventListener('click',getData1);
});



let getData = () =>
{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((data) => data.json())
  .then((data) => getPosts(data));

}
let getData1 = () =>
{
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then((data) => data.json())
  .then((data) => getPhotos(data));

}
/*Get photos*/

let getPhotos = (data) =>
{
    for(let idx=0; idx<100; idx++)
    {
      let picture = data[idx];
      let imgTag = document.createElement('img');
      imgTag.src = picture.thumbnailUrl;
      document.body.appendChild(imgTag);
    }

}

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
