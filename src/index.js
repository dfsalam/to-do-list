import './style.css';
import syncImage from './images/sync.png';
import submitImage from './images/submit.png';
import TaskList from './modules/TaskList.js';

const containerElement = document.getElementById('to-do-list');

// Insert the sync image
const syncImageElement = document.createElement('img');
syncImageElement.src = syncImage;
syncImageElement.alt = 'Sync';
document.querySelector('.div_title').appendChild(syncImageElement);
syncImageElement.classList.add('sync_image');

// Insert the submit image
const submitImageElement = document.createElement('img');
submitImageElement.src = submitImage;
document.querySelector('.div_placeholder').appendChild(submitImageElement);
submitImageElement.classList.add('submit_image');

// Instance taskList
const taskList = new TaskList(containerElement);

// Event listener on submit icon
submitImageElement.addEventListener('click', () => {
  const descriptionElement = document.getElementById('input__task');
  const description = descriptionElement.value.trim();
  taskList.add(description);
  descriptionElement.reset();
  descriptionElement.focus();
});
