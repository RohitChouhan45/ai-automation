// Set current year in footer
if (document.getElementById('current-year')) {
  document.getElementById('current-year').textContent = new Date().getFullYear();
}

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(e.target) && 
        e.target !== mobileMenuButton) {
      mobileMenu.classList.remove('active');
    }
  });
}

// Tabs functionality
const tabTriggers = document.querySelectorAll('.tabs-trigger');
const tabPanels = document.querySelectorAll('.tab-panel');

tabTriggers.forEach(trigger => {
  trigger.addEventListener('click', function() {
    // Remove active class from all triggers and panels
    tabTriggers.forEach(t => t.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    
    // Add active class to clicked trigger
    this.classList.add('active');
    
    // Show corresponding panel
    const tabId = this.getAttribute('data-tab');
    document.getElementById(`${tabId}-panel`).classList.add('active');
  });
});

// Task completion functionality
const completeButtons = document.querySelectorAll('.card-content button');

completeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const taskElement = this.closest('.space-y-4');
    const progressBar = taskElement.querySelector('.progress-bar');
    
    // Update progress to 100%
    progressBar.style.width = '100%';
    
    // Add completed styling
    const taskTitle = taskElement.querySelector('.font-medium');
    taskTitle.style.textDecoration = 'line-through';
    taskTitle.style.color = 'var(--muted-foreground)';
    
    // Disable button
    this.disabled = true;
    this.textContent = 'Completed';
  });
});