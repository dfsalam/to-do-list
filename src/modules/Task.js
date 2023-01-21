export default class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }

    createHtml = () => {
      const task = document.createElement('div');
      task.classList.add('list__element');
      task.innerHTML = `      
      <input id="${this.index}" class="checkbox" type="checkbox"></input> 
      <input id="${this.index}" class="task__listed" value=${this.description}></input>
      <button class="remove__button" id="${this.index}"></button>
      `;
      return task;
    }
}