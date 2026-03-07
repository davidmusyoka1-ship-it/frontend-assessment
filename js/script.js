// ========================================
// DAILY TIPS - Random tip on page load
// ========================================
const dailyTips = [
  "Diversification is key to managing risk in your investment portfolio.",
  "Start investing early to take advantage of compound interest.",
  "Never invest money you can't afford to lose.",
  "Research before you invest - knowledge is your best asset.",
  "Set clear financial goals and create a plan to achieve them.",
  "Regular investing, even small amounts, builds wealth over time.",
  "Understanding your risk tolerance is crucial for investment success.",
  "Don't let emotions drive your investment decisions.",
  "Review and rebalance your portfolio periodically.",
  "Learn from both your successful and unsuccessful investments."
];

// Set random daily tip
function setDailyTip() {
  const tipElement = document.getElementById('dailyTip');
  if (tipElement) {
    const randomTip = dailyTips[Math.floor(Math.random() * dailyTips.length)];
    tipElement.textContent = `"${randomTip}"`;
  }
}

// ========================================
// SIDEBAR TOGGLE
// ========================================
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  
  sidebar.classList.toggle('show');
  overlay.classList.toggle('show');
}

// Close sidebar when clicking on a nav link (mobile)
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.sidebar .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 992) {
        toggleSidebar();
      }
    });
  });
});

// ========================================
// MEMBERSHIP TOGGLE - Accordion Style
// ========================================
function toggleMembership(id) {
  const section = document.getElementById(id);
  const allMemberships = document.querySelectorAll('.member-body');
  const allIcons = document.querySelectorAll('.toggle-icon');
  
  // Get the toggle icon for this membership
  const parentCard = section.closest('.membership');
  const icon = parentCard.querySelector('.toggle-icon');
  
  // Close all other memberships
  allMemberships.forEach(membership => {
    if (membership.id !== id) {
      membership.classList.remove('show');
    }
  });
  
  // Reset all icons
  allIcons.forEach(toggleIcon => {
    if (toggleIcon !== icon) {
      toggleIcon.classList.remove('rotate');
      toggleIcon.textContent = '+';
    }
  });
  
  // Toggle current membership
  section.classList.toggle('show');
  
  // Toggle icon
  if (section.classList.contains('show')) {
    icon.classList.add('rotate');
    icon.textContent = '−';
  } else {
    icon.classList.remove('rotate');
    icon.textContent = '+';
  }
}

// ========================================
// CONTACT FORM
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Form submitted successfully! We'll get back to you soon.");
      
      // Reset form
      form.reset();
      
      // Close modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
      if (modal) {
        modal.hide();
      }
    });
  }
});

// ========================================
// FADE-IN ANIMATION ON SCROLL
// ========================================
function handleFadeIn() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for visual effect
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeElements.forEach(el => observer.observe(el));
}

// ========================================
// ANIMATE COUNTERS
// ========================================
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.target);
        const duration = 1500; // Animation duration in ms
        const steps = 50;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current);
          }
        }, duration / steps);
        
        counter.dataset.animated = 'true';
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// ========================================
// THEME TOGGLE
// ========================================
const themeSelector = document.getElementById('themeSelector');
if (themeSelector) {
  themeSelector.addEventListener('change', function() {
    // Remove all theme classes
    document.body.classList.remove('theme-professional', 'theme-gritty', 'theme-thin');
    // Add selected theme class
    document.body.classList.add(this.value);
    
    // Save preference
    localStorage.setItem('selectedTheme', this.value);
  });
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme && themeSelector) {
    themeSelector.value = savedTheme;
    document.body.classList.remove('theme-professional', 'theme-gritty', 'theme-thin');
    document.body.classList.add(savedTheme);
  }
});

// ========================================
// PROGRESS BAR ANIMATION
// ========================================
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill');
  
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
}

// ========================================
// STAT BOX HOVER EFFECTS
// ========================================
function addStatBoxEffects() {
  const statBoxes = document.querySelectorAll('.stat-box');
  
  statBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'transform 0.2s ease';
    });
    
    box.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
}

// ========================================
// EVENT ITEM CLICK HANDLERS
// ========================================
function addEventHandlers() {
  const eventItems = document.querySelectorAll('.event-item');
  
  eventItems.forEach(item => {
    item.addEventListener('click', function() {
      const title = this.querySelector('.event-title').textContent;
      alert(`Event: ${title}\n\nMore details coming soon!`);
    });
  });
}

// ========================================
// INITIALIZE ALL ON DOM READY
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  // Set daily tip
  setDailyTip();
  
  // Initialize fade-in animations
  handleFadeIn();
  
  // Initialize counter animations
  animateCounters();
  
  // Animate progress bars
  animateProgressBars();
  
  // Add stat box hover effects
  addStatBoxEffects();
  
  // Add event handlers
  addEventHandlers();
  
  // Initial fade-in for visible elements
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('visible');
  });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// ========================================
// RESPONSIVE HANDLING
// ========================================
function handleResize() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  
  // On larger screens, ensure sidebar is closed
  if (window.innerWidth >= 992) {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
  }
}

window.addEventListener('resize', handleResize);

// ========================================
// KEYBOARD NAVIGATION
// ========================================
document.addEventListener('keydown', function(e) {
  // Close sidebar with Escape key
  if (e.key === 'Escape') {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('show')) {
      toggleSidebar();
    }
  }
});
