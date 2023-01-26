/**
 * @jest-environment jsdom
 */

import TaskList from './TaskList.js';
// const localStorageMock = require('./localStorageMock.js')

describe('tasks', () => {
  document.body.innerHTML = `
    <div id="to-do-list"></div>
  `;
  const container = document.querySelector('#to-do-list');
  const taskList2 = new TaskList(container);
  taskList2.add('Do the bed.');
  taskList2.add('Do the bed.');
  // Add testing
  test('check the array for adding elements', () => {
    expect(taskList2.taskArray).toHaveLength(1);
  });
  test('check local storage for add', () => {
    const localStorageRegister = JSON.parse(localStorage.getItem('taskList'));
    delete localStorageRegister[0].tag;
    expect(localStorageRegister).toStrictEqual([{
      description: 'Do the bed.',
      index: 1,
      completed: false,
    }]);
  });

  test('check html for add', () => {
    const container = document.querySelector('#to-do-list').innerHTML
    expect(container).toBe(`<div class="list__element">      `+`
      <input id="`+taskList2.taskArray[0].tag+`" class="checkbox" type="checkbox"> 
      <input id="`+taskList2.taskArray[0].tag+`" class="task__listed" value="`+taskList2.taskArray[0].description+`">
      <button class="remove__button" id="`+taskList2.taskArray[0].tag+`"></button>
    `+`  </div>`);
  });

  // Delete testing

  const btn = document.querySelector('.remove__button');
  taskList2.remove(btn);

  test('check the array for removing elements', () => {
    expect(taskList2.taskArray).toHaveLength(1);
  });

  test('check local storage for removing', () => {
    const localStorageRegister = JSON.parse(localStorage.getItem('taskList'));

    delete localStorageRegister[0].tag;
    expect(localStorageRegister).toStrictEqual([{
      description: 'Do the bed.',
      index: 1,
      completed: false,
    }]);
  });
});
