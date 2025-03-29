document.addEventListener('DOMContentLoaded', function() {
  // Task checkbox functionality
  const taskCheckboxes = document.querySelectorAll('.task-checkbox');
  
  taskCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const taskItem = this.closest('.task-item');
      const taskTitle = taskItem.querySelector('.task-title');
      const progressBar = taskItem.querySelector('.progress-bar');
      
      if (this.checked) {
        taskTitle.classList.add('line-through', 'text-muted-foreground');
        progressBar.style.width = '100%';
      } else {
        taskTitle.classList.remove('line-through', 'text-muted-foreground');
        // Reset to original progress
        const originalProgress = taskItem.dataset.progress || '0';
        progressBar.style.width = `${originalProgress}%`;
      }
    });
  });
  
  // Add new task functionality
  const newTaskInput = document.getElementById('new-task-input');
  const addTaskBtn = document.getElementById('add-task-btn');
  const tasksContainer = document.getElementById('tasks-container');
  
  addTaskBtn.addEventListener('click', function() {
    addNewTask();
  });
  
  newTaskInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      addNewTask();
    }
  });
  
  function addNewTask() {
    const taskTitle = newTaskInput.value.trim();
    if (!taskTitle) return;
    
    // Create new task HTML
    const newTaskId = Date.now();
    const taskHTML = `
      <div class="flex items-start p-4 hover:bg-muted/50 task-item" data-id="${newTaskId}">
        <div class="flex items-center gap-3 mr-3">
          <input type="checkbox" class="checkbox task-checkbox">
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-base font-medium task-title">${taskTitle}</h3>
              <p class="text-sm text-muted-foreground mt-1">New task</p>
            </div>
            <div class="dropdown">
              <button class="button button-ghost button-sm button-icon dropdown-trigger">
                <i class="icon icon-more-horizontal"></i>
              </button>
              <div class="dropdown-content">
                <button class="dropdown-item">Edit</button>
                <button class="dropdown-item">Set Priority</button>
                <button class="dropdown-item">Change Category</button>
                <div class="dropdown-separator"></div>
                <button class="dropdown-item text-red-500">Delete</button>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-2 mt-3">
            <div class="flex items-center gap-1 text-xs">
              <i class="icon icon-calendar text-muted-foreground"></i>
              <span>Today</span>
            </div>
            <span class="badge badge-outline text-xs text-yellow-500 border-yellow-500">medium</span>
            <span class="badge badge-outline text-xs">work</span>
          </div>

          <div class="mt-3 space-y-1">
            <div class="flex items-center justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>0%</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 0%"></div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Insert new task at the top
    tasksContainer.insertAdjacentHTML('afterbegin', taskHTML);
    
    // Clear input
    newTaskInput.value = '';
    
    // Add event listener to new checkbox
    const newCheckbox = tasksContainer.querySelector(`[data-id="${newTaskId}"] .task-checkbox`);
    newCheckbox.addEventListener('change', function() {
      const taskItem = this.closest('.task-item');
      const taskTitle = taskItem.querySelector('.task-title');
      const progressBar = taskItem.querySelector('.progress-bar');
      
      if (this.checked) {
        taskTitle.classList.add('line-through', 'text-muted-foreground');
        progressBar.style.width = '100%';
      } else {
        taskTitle.classList.remove('line-through', 'text-muted-foreground');
        progressBar.style.width = '0%';
      }
    });
  }
  
  // Tab functionality
  const tabTriggers = document.querySelectorAll('.tabs-trigger');
  
  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const tab = this.getAttribute('data-tab');
      
      // Filter tasks based on tab
      const tasks = document.querySelectorAll('.task-item');
      
      tasks.forEach(task => {
        const checkbox = task.querySelector('.task-checkbox');
        const isCompleted = checkbox.checked;
        
        switch(tab) {
          case 'all':
            task.style.display = 'flex';
            break;
          case 'today':
            // For demo purposes, show all tasks in "Today" tab
            task.style.display = 'flex';
            break;
          case 'upcoming':
            // For demo purposes, hide completed tasks in "Upcoming" tab
            task.style.display = isCompleted ? 'none' : 'flex';
            break;
          case 'completed':
            task.style.display = isCompleted ? 'flex' : 'none';
            break;
        }
      });
    });
  });
});