function greeting(greet, name) {
  greetingHandler(name);
}
function greetingHandler(name) {
  console.log('Hello', name);
}

function greetingBangladesh(name){
    console.log('Welcome to Bangladesh', name);
}

greeting(greetingHandler, 'Saad');
greeting(greetingBangladesh, 'Sara');