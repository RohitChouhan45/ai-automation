document.addEventListener('DOMContentLoaded', function() {
  // Profile form submission
  const profileForm = document.querySelector('#profile-panel form');
  const saveButton = document.querySelector('#profile-panel .button');
  
  if (saveButton) {
    saveButton.addEventListener('click', function() {
      // Show loading state
      const originalText = this.innerHTML;
      this.disabled = true;
      this.innerHTML = `
        <div class="flex items-center justify-center">
          <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          <span>Saving...</span>
        </div>
      `;
      
      // Simulate API call
      setTimeout(() => {
        // Reset button
        this.disabled = false;
        this.innerHTML = originalText;
        
        // Show success message
        alert('Profile updated successfully!');
      }, 1000);
    });
  }
  
  // Password update
  const updatePasswordBtn = document.querySelector('#account-panel .button');
  
  if (updatePasswordBtn) {
    updatePasswordBtn.addEventListener('click', function() {
      const currentPassword = document.getElementById('current-password').value;
      const newPassword = document.getElementById('new-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      
      if (!currentPassword || !newPassword || !confirmPassword) {
        alert('Please fill in all password fields');
        return;
      }
      
      if (newPassword !== confirmPassword) {
        alert('New passwords do not match');
        return;
      }
      
      // Show loading state
      const originalText = this.textContent;
      this.disabled = true;
      this.textContent = 'Updating...';
      
      // Simulate API call
      setTimeout(() => {
        // Reset button
        this.disabled = false;
        this.textContent = originalText;
        
        // Clear fields
        document.getElementById('current-password').value = '';
        document.getElementById('new-password').value = '';
        document.getElementById('confirm-password').value = '';
        
        // Show success message
        alert('Password updated successfully!');
      }, 1000);
    });
  }
  
  // Delete account confirmation
  const deleteAccountBtn = document.querySelector('.button-destructive');
  
  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', function() {
      const confirmed = confirm('Are you sure you want to delete your account? This action cannot be undone.');
      
      if (confirmed) {
        // In a real app, this would call an API to delete the account
        alert('Account deletion initiated. You will receive a confirmation email.');
      }
    });
  }
});