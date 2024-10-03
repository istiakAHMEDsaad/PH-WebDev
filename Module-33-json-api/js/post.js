document.body.style.fontSize = '1.2rem';
document.body.style.fontFamily = 'arial';
function loadPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => displayPost(json))
    .catch((error) => console.log(error));
}

function displayPost(json) {
  const getPostContainer = document.getElementById('post-container');
  for (const post of json) {
    const postArticle = document.createElement('article');
    postArticle.classList.add('post-container');
    postArticle.innerHTML = `
        <h4 class="user-id">User ID: ${post.userId}</h4>
        <h5 class="user-title">Title: ${post.title}</h5>
        <p class="post-content">Post Content: <br>${post.body}</p>
        <hr>
    `;
    getPostContainer.appendChild(postArticle);
  }
}

loadPost()