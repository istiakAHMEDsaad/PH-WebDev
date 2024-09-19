// Mouse move
document
  .getElementsByClassName('click-me')[0]
  .addEventListener('mousemove', function () {
    console.log('My event is triggered');
  });

// Focus event
document.getElementById('text-field').addEventListener('focus', function () {
  console.log('----Event Trigger----');
});

// Blur event
document.getElementById('text-field').addEventListener('blur', function () {
  console.log('----blur----');
});

// Key
/* document.getElementById('text-field').addEventListener('keydown', function () {
  console.log(event);
});

document.getElementById('text-field').addEventListener('keypress', function(event){
  console.log(event.target.value);
}) */
document
  .getElementById('text-field')
  .addEventListener('keyup', function (event) {
    console.log(event.target.value);
  });

document.getElementById('delete-button').addEventListener('click', function () {
  document.getElementById('delete-me').style.display = 'none';
});

// secret delete
document
  .getElementById('confirm-delete')
  .addEventListener('keyup', function (event) {
    const inputValue = event.target.value;
    const enableButton = document.getElementById('secret-delete');
    if (inputValue == 'delete') {
      enableButton.removeAttribute('disabled');
    } else {
      enableButton.setAttribute('disabled', true);
    }
  });
document.getElementById('secret-delete').addEventListener('click', function () {
  document.getElementById('delete-per').style.display = 'none';
});

// Bubble
document.getElementById('item-1').addEventListener('click', function () {
  console.log('item 1 is clicked');
});
document.getElementById('item-2').addEventListener('click', function (event) {
  console.log('item 2 is clicked');
  event.stopPropagation();
});
document.getElementById('list-ul').addEventListener('click', function () {
  console.log('ul is clicked');
});
document
  .getElementById('list-container')
  .addEventListener('click', function () {
    console.log('list container is clicked');
  });
document.getElementById('bubble').addEventListener('click', function () {
  console.log('body is clicked');
});

// Delegate
const getItems = document.getElementsByClassName('five-ul');
for (const getItem of getItems) {
  getItem.addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target); //Remove what you select 
  });
}

document.getElementById('add-more').addEventListener('click', function(){
  const createPara = document.createElement('li');
  // createPara.className.add('five-ul');
  createPara.classList.add('five-ul');
  const innerPara = prompt('Enter your want:');
  createPara.innerText = `${innerPara} 😃`
  document.getElementById('delegate-ul').appendChild(createPara);
})
