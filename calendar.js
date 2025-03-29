document.addEventListener('DOMContentLoaded', function() {
  // Calendar day selection
  const calendarDays = document.querySelectorAll('.calendar-day');
  
  calendarDays.forEach(day => {
    day.addEventListener('click', function() {
      // Remove active class from all days
      calendarDays.forEach(d => {
        d.classList.remove('bg-primary', 'text-primary-foreground');
      });
      
      // Add active class to clicked day
      this.classList.add('bg-primary', 'text-primary-foreground');
      
      // Update selected date (in a real app, this would load events for that day)
      const selectedDay = this.textContent;
      const monthYear = document.querySelector('.calendar-header h3').textContent;
      document.querySelector('.card-header h2').textContent = `Wednesday, March ${selectedDay}, 2025`;
    });
  });
  
  // Today button functionality
  const todayBtn = document.getElementById('today-btn');
  
  if (todayBtn) {
    todayBtn.addEventListener('click', function() {
      // Find the day marked as today (in this demo, it's day 26)
      const today = document.querySelector('.calendar-day.bg-primary');
      
      // Scroll to today's events
      window.scrollTo({
        top: document.querySelector('.card-content').offsetTop - 100,
        behavior: 'smooth'
      });
    });
  }
  
  // View toggle (day, week, month)
  const viewButtons = document.querySelectorAll('.card-header .button');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      viewButtons.forEach(btn => {
        btn.classList.remove('button-outline');
        btn.classList.add('button-outline');
      });
      
      // Add active class to clicked button
      this.classList.remove('button-outline');
      
      // In a real app, this would change the calendar view
    });
  });
});

const calendarDates = document.querySelector('.calendar-dates');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function renderCalendar(month, year) {
  calendarDates.innerHTML = '';
  monthYear.textContent = `${months[month]} ${year}`;

  // Get the first day of the month
  const firstDay = new Date(year, month, 1).getDay();

  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create blanks for days of the week before the first day
  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement('div');
    calendarDates.appendChild(blank);
  }

  // Populate the days
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.textContent = i;
    calendarDates.appendChild(day);
  }
}
renderCalendar(currentMonth, currentYear);

prevMonthBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});