import './style.css';
import syncImage from './images/sync.png';
import submitImage from './images/submit.png';
import checkBox from './images/check_box.png';

// array of some simple to do tasks
const tasks = [
  {
    description: 'Buy milk',
    completed: false,
    index: 1,
  },
  {
    description: 'Clean bathroom',
    completed: false,
    index: 2,
  },
  {
    description: 'Write report',
    completed: false,
    index: 3,
  },
];

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

// Function to load elements from array to to-do-list section

const loadElements = (array, container) => {
  let elementsToDisplay = '';
  array.forEach((e) => {
    elementsToDisplay += `
    <div class = "list__element">
    <img src="${checkBox}" alt="check box" >
    <h3>${e.description}</h3>
    </div>
    `;
  });

  container.innerHTML = elementsToDisplay;
};

loadElements(tasks, containerElement);
