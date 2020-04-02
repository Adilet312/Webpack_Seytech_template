import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('js-button');
  generateButton.addEventListener('click', getData);
});



let getData = () =>
{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((data) => data.json())
  .then((data) => getPosts(data));

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
  while(idx<posts.length){
    let post = posts[idx];
    let li = document.createElement('li');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    h3.innerText = post.title;
    p.innerText = post.body;
    li.appendChild(h3);
    li.appendChild(p);
    ul.appendChild(li);
    idx = idx + 1;
  }

}
