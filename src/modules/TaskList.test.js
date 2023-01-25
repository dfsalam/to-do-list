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
  task_list.add('Do the bed.');
  //Add testing
  test('check the array for adding elements', () => {
    
    expect(task_list.taskArray).toHaveLength(1);
  })
  test('check local storage for add', () => {
    
    const localStorageRegister = JSON.parse(localStorage.getItem('taskList'))    
    delete localStorageRegister[0].tag;
    expect(localStorageRegister).toStrictEqual([{description:'Do the bed.',
     index:1, completed:false}]);
  })
  
  //Delete testing
  
  const btn = document.querySelector('.remove__button');
  console.log(btn);
  task_list.remove(btn);

  test('check the array for removing elements', () => {    
    expect(task_list.taskArray).toHaveLength(1);
  })

  test('check local storage for removing', () => {    
    const localStorageRegister = JSON.parse(localStorage.getItem('taskList'));
       
    delete localStorageRegister[0].tag
    expect(localStorageRegister).toStrictEqual([{description:'Do the bed.',
    index:1, completed:false}]);
  })
})


  