// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Handle login form submission
const loginForm = document.getElementById('login-form');
const errorAlert = document.getElementById('error-alert');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const remember = document.getElementById('remember').checked;
  
  // Show loading state
  const submitButton = this.querySelector('button[type="submit"]');
  const originalButtonContent = submitButton.innerHTML;
  submitButton.disabled = true;
  submitButton.innerHTML = `
    <div class="flex items-center justify-center">
      <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
      <span>Logging in...</span>
    </div>
  `;
  
  // Hide any previous error
  errorAlert.classList.add('hidden');
  
  try {
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, we'll just redirect to dashboard
    // In a real app, you would validate credentials with your backend
    window.location.href = 'dashboard.html';
    
  } catch (err) {
    // Show error message
    errorMessage.textContent = 'Invalid email or password. Please try again.';
    errorAlert.classList.remove('hidden');
    
    // Reset button state
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonContent;
  }
});

// Add animation classes
document.addEventListener('DOMContentLoaded', function() {
  // These animations would be handled by CSS, but we're adding classes here
  // to simulate the Framer Motion animations from the React version
});