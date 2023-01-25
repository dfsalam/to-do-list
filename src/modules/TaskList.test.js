/**
 * @jest-environment jsdom
 */

import TaskList from './TaskList.js';
//const localStorageMock = require('./localStorageMock.js')


describe('tasks', () => {
  document.body.innerHTML = `
    <div id="to-do-list"></div>
  `
  const container = document.querySelector('#to-do-list');
  const task_list = new TaskList(container);
  task_list.add('Do the bed.');
  //Add testing
  test('add function', () => {
    
    expect(task_list.taskArray).toHaveLength(1);
  })
  test('local storage', () => {
    
    const localStorageRegister = JSON.parse(localStorage.getItem('taskList'))
    console.log(localStorageRegister);
    delete localStorageRegister[0].tag;
    expect(localStorageRegister).toStrictEqual([{description:'Do the bed.',
     index:1, completed:false}]);
  })
  //Delete testing
  task_re



})