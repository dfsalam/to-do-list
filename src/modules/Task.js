import checkBox from '../images/check_box.png';

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
      <img src="${checkBox}" alt="check box" >
      <input id="${this.index}" value=${this.description}></input>
      <button class="remove__button" id="${this.index}"></button>
      `;
      return task;
    }
}