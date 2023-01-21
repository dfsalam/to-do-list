import './style.css';
import syncImage from './images/sync.png';
import submitImage from './images/submit.png';
import TaskList from './modules/TaskList.js';
import interactive from './modules/interactive.js';

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

// To clear local storage
// localStorage.clear();

// Instance taskList
const taskList = new TaskList(containerElement);

// Event listener on input task to submit with Enter
const inputTask = document.getElementById('input__task');
inputTask.addEventListener('click', () => {
  inputTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const description = inputTask.value.trim();
      if (description === '') {
        inputTask.blur();
      } else {
        taskList.add(description);
        inputTask.value = '';
        inputTask.focus();
      }
    }
  });
});

// Event listener on submit icon
submitImageElement.addEventListener('click', () => {
  const descriptionElement = document.getElementById('input__task');
  const description = descriptionElement.value.trim();
  if (description === '') {
    descriptionElement.blur();
  } else {
    taskList.add(description);
    descriptionElement.value = '';
    descriptionElement.focus();
  }
});

const taskElements = document.querySelectorAll('.list__element input');

taskElements.forEach((e) => {
  e.addEventListener('input', () => {
    const index = e.id;
    const newValue = e.value;

    e.addEventListener('keypress', (pressed) => {
      if (pressed.key === 'Enter') {
        taskList.update(index, newValue);
        e.blur();
      }
    });
    e.addEventListener('focusout', () => {
      taskList.update(index, newValue);
    });
  });
});

// Checkbox eventlistener
const checkboxList = document.querySelectorAll('.checkbox');
checkboxList.forEach((e) => {
  const index = e.id;
  e.addEventListener('change', () => {
    interactive(e, taskList, index);
  });
});
