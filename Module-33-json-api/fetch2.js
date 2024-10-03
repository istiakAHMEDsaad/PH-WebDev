function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => showUserData(json))
    .catch((error) => console.log(error));
}
function showUserData(json) {
  const getUsersUl = document.getElementById('users-list');
  for (const user of json) {
    const createUserLi = document.createElement('li');
    createUserLi.innerText = `${user.username} 😀`;
    createUserLi.style.fontSize = '1.2rem';
    createUserLi.style.fontFamily = 'Arial';
    getUsersUl.appendChild(createUserLi);
  }
}

