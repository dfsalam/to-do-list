const clearAll = (taskList) => {
  const completedTasks = document.querySelectorAll('.task__completed');
  completedTasks.forEach((task) => {
    taskList.remove(task.nextElementSibling);
  });
};
export default clearAll;