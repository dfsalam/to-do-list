const interactive = (element, taskList, tag) => {
  element.nextElementSibling.classList.toggle('task__completed');
  for (let i = 0; i < taskList.taskArray.length; i += 1) {
    if (taskList.taskArray[i].tag === tag) {
      if (taskList.taskArray[i].completed) {
        taskList.taskArray[i].completed = false;
      } else {
        taskList.taskArray[i].completed = true;
      }
    }
  }
  taskList.saveLocally();
};

export default interactive;