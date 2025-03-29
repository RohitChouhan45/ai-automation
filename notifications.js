document.addEventListener('DOMContentLoaded', function() {
  // Mark all as read functionality
  const markAllReadBtn = document.querySelector('.button-outline');
  
  if (markAllReadBtn) {
    markAllReadBtn.addEventListener('click', function() {
      // Remove background color from unread notifications
      const unreadNotifications = document.querySelectorAll('.bg-primary/5');
      
      unreadNotifications.forEach(notification => {
        notification.classList.remove('bg-primary/5');
        
        // Change font weight from semibold to medium
        const title = notification.querySelector('h3');
        if (title) {
          title.classList.remove('font-semibold');
          title.classList.add('font-medium');
        }
      });
      
      // Update unread count
      const unreadBadge = document.querySelector('[data-tab="unread"] .badge');
      if (unreadBadge) {
        unreadBadge.textContent = '0';
      }
    });
  }
  
  // Notification settings toggle
  const toggleSwitches = document.querySelectorAll('.switch input');
  
  toggleSwitches.forEach(toggle => {
    toggle.addEventListener('change', function() {
      // In a real app, this would save the setting to the server
      console.log(`${this.closest('.flex').querySelector('h4').textContent} setting changed to ${this.checked}`);
    });
  });
});