export default class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.index = index;
    this.completed = completed;
    this.tag = this.createTag();
  }

    createHtml = () => {
      const task = document.createElement('div');
      task.classList.add('list__element');
      task.innerHTML = `      
      <input id="${this.tag}" class="checkbox" type="checkbox"></input> 
      <input id="${this.tag}" class="task__listed" value=${this.description}></input>
      <button class="remove__button" id="${this.tag}"></button>
      `;
      return task;
    }

    createTag = (tagLen = 8) => {
      let tag = '';
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < tagLen; i += 1) {
        tag += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return tag;
    }
}