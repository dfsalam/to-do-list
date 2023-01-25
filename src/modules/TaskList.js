import Task from './Task.js';

export default class taskList {
  constructor(container) {
    this.taskArray = JSON.parse(localStorage.getItem('taskList')) || [];
    this.container = container;
    if(this.amount > 0){
    this.loadList();
    }
  }

  loadList = () => {
    const instances = [];
    const fragment = document.createDocumentFragment();
    this.taskArray.forEach(({ description, index, completed }) => {
      const task = new Task(description, index, completed);
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
    this.taskArray = this.taskArray.filter((task) => task.tag !== button.id);
    button.parentElement.remove();
    this.updateIndex(this.taskArray);
    this.saveLocally();
  }

  add = (description) => {
    const index = this.amount + 1;
    const task = new Task(description, index);
    this.taskArray.push(task);
    this.container.appendChild(this.create(task));
    this.saveLocally();    
  }

  create = (task) => {
    const html = task.createHtml();
    const btn = html.querySelector('button');
    btn.addEventListener('click', ({ target }) => {
      this.remove(target);
    });
    return html;
  }

  update = (tag, newValue) => {
    this.taskArray.forEach((e) => {
      if (e.tag === tag) {
        e.description = newValue;
      }
    });
    this.saveLocally();
  }

  updateIndex = () => {
    this.taskArray.forEach((e, position) => {
      e.index = position + 1;
    });
  }

  get amount() {
    return this.taskArray.length;
  }

  get array() {
    return this.taskArray;
  }
}