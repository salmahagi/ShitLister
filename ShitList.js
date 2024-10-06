// Get the form and task list elements
const taskForm = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

// Add an event listener to the form for when the user submits a new task
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  // Get the description and priority from the form input
  const taskDescription = document.getElementById('new-task-description').value;
  const taskPriority = document.getElementById('task-priority').value;

  // Create a new <li> element for the task
  const newTask = document.createElement('li');
  
  // Create a checkbox for each task
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('task-checkbox'); // Add a class to identify it
  
  // Add task description and priority to the <li>
  newTask.innerHTML = `${taskDescription}`;
  
  // Append the checkbox to the task
  newTask.prepend(checkbox);
  
  // Create a delete button for each task
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖'; // Use an "X" symbol
  deleteBtn.classList.add('delete-btn');
  
  // Append the delete button to the task
  newTask.appendChild(deleteBtn);
  
  // Add the new task to the task list
  taskList.appendChild(newTask);

  // Reset the form
  taskForm.reset();

  // Add event listener to the delete button for removing tasks
  deleteBtn.addEventListener('click', function() {
    newTask.remove();
  });

  // Add event listener to the checkbox to toggle the completed class
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      newTask.classList.add('completed');
    } else {
      newTask.classList.remove('completed');
    }
  });
});
