import _ from 'lodash';
import './style.css';

//array of some simple to do tasks
const tasks = [
  {
    'description':'Buy milk',
    'completed': false,
    'index':1
  },
  {
    'description':'Clean bathroom',
    'completed': false,
    'index':2
  },
  {
    'description':'Write report',
    'completed': false,
    'index':3
  }
]

const containerElement = document.getElementById('to-do-list');

const loadElements = (array, container) => { 
  let elementsToDisplay = "";
  array.forEach( e => {
    elementsToDisplay += `<div class = "list__element">${e.description}</div>`
  })
  
  container.innerHTML = elementsToDisplay;

}

loadElements(tasks, containerElement);

