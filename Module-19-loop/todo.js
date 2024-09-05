let todo = [];
let req = prompt("Please enter your choice:");

while (true) {
  if (req == "quit") {
    console.log("app quit");
    break;
  }

  if (req == "list") {
    console.log("----------");
    for (let i=0; i<todo.length;i++) {
      console.log(`${i+1}. ${todo[i]}`);
    }
    console.log("----------");
  } else if (req == "add") {
    let task = prompt("Please enter the task you want to add:");
    todo.push(task);
    console.log("Task added");
  } else if(req == "delete"){
    let inDex = prompt("Enter enter for delete task index:");
    todo.splice(inDex, 1);
    console.log("Task deleted");
  } else{
    console.log("Wrong request");
  }
  req = prompt("Please enter your choice:");
}
