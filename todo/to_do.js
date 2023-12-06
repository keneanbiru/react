function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;
  
    var taskList = document.getElementById('taskList');
    var listItem = document.createElement('li');
    listItem.className = 'taskItem';
  
    var taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
  
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'removeButton';
    removeButton.onclick = function() {
      taskList.removeChild(listItem);
    };
  
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);
  
    taskList.appendChild(listItem);
  
    taskInput.value = '';
  }
