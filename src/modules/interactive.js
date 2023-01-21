const interactive = (element, taskList, tag) => {
  element.nextElementSibling.classList.toggle('task__completed');
  console.log("Elemento 0 tag = "+taskList.taskArray[0].tag)
  console.log("tag = "+tag)
  console.log("lenght = "+taskList.taskArray.length)
  for (let i=0; i<taskList.taskArray.length; i+=1){
    if(taskList.taskArray[i].tag === tag){
      console.log("here")
      console.log(taskList.taskArray[i].completed)
      if(taskList.taskArray[i].completed) {
        taskList.taskArray[i].completed = false;
      }else{
        taskList.taskArray[i].completed = true;
        console.log(taskList.taskArray[i].completed)
      }
      taskList.saveLocally();
    }
  }  
};

export default interactive;