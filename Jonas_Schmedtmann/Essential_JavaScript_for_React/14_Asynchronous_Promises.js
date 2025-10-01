fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log('this string load before the fetch')
