const interactive = (element, Object, index) => {
  element.classList.add('task__completed');
  Object.taskArray[index-1].completed = true;
  Object.saveLocally();
}

export default interactive;