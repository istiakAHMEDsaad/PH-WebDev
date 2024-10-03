const loadComment = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const json = await response.json();
    console.log(json);
}

const loadComment2 = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}