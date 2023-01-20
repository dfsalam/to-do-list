import checkBox from '../images/check_box.png';
import removeIcon from '../images/remove_icon.png';

export default class Task {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

    createHtml = () => {
      const task = document.createElement('div');
      task.classList.add('list__element');
      task.innerHTML = `
      <img src="${checkBox}" alt="check box" >
      <input value=${this.description}></input>
      <button class="remove__button" id="${this.index}"><img src="${removeIcon}" alt="Delete" ></button>
      `;
      return task;
    }
}