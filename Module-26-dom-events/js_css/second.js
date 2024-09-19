/* const postButton = document.getElementsByClassName('btn-post')[0];

function getNewComment(){
    const commentCheck = document.getElementById('travel-comment');
    console.log(commentCheck.value);
} */
document.getElementsByClassName('btn-post')[0].addEventListener('click', function(){
    const commentPost = document.getElementById('travel-comment').value;
    const createP = document.createElement('p');
    createP.innerText = `${commentPost} 👍`;
    document.getElementById('temp-section').appendChild(createP);
    // document.getElementsByClassName('show-comment')[0].innerText = `${commentPost} 👍`;
})