import Task from './Task.js';

export default class taskList {
  constructor(container) {
    this.taskArray = JSON.parse(localStorage.getItem('taskList')) || [];
    this.container = container;
    this.size = this.taskArray.length;
  }

  loadList = () => {
    const instances = [];
    const fragment = document.createDocumentFragment();
    this.taskArray.forEach(({ description, completed, index }) => {
      const task = new Task(description, completed, index);
      fragment.appendChild(this.create(task));
      instances.push(task);
    });
    this.container.appendChild(fragment);
    this.taskArray = instances;
  }

  saveLocally = () => {
    localStorage.setItem('taskList', JSON.stringify(this.taskArray));
  }

  remove = (button) => {
    this.taskArray = this.taskArray.filter((task) => task.id !== task.id);
    button.parentElement.remove();
    this.saveLocally();       
  }

  add = (description) => {
    const task = new Book(description);
    this.taskList.push(task);
    this.container.appendChild(this.create(book));
    this.saveLocally();    
  }

  create = (task) => {
    const html = task.createHtml(this.remove);
    const btn = html.querySelector('button');
    btn.addEventListener('click', ({ target }) => {
      this.remove(target);
    });
    return html;
  }

  get amount() {
    return this.taskArray.length;
  }
}