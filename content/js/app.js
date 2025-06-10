// Enhanced app.js with modern interactions and performance optimizations

document.addEventListener("DOMContentLoaded", () => {
  // Performance optimized mouse effect with RAF
  let circle = document.querySelector(".circle");
  let isMoving = false;

  function updateCirclePosition(e) {
    if (!isMoving && window.innerWidth > 800) {
      isMoving = true;
      requestAnimationFrame(() => {
        let circleWidth = circle.offsetWidth;
        let circleHeight = circle.offsetHeight;
        let circleX = e.pageX - circleWidth / 2;
        let circleY = e.pageY - circleHeight / 2;

        circleX = Math.max(
          0,
          Math.min(circleX, window.innerWidth - circleWidth - 200)
        );
        circleY = Math.max(
          0,
          Math.min(
            circleY,
            document.documentElement.scrollHeight - circleHeight - 200
          )
        );

        circle.style.transform = `translate(${circleX}px, ${circleY}px)`;
        isMoving = false;
      });
    }
  }

  window.addEventListener("mousemove", updateCirclePosition, { passive: true });

  // Enhanced smooth scroll with easing
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Enhanced hamburger menu with animations
  const hamburger = document.querySelector(".hamburger");
  const openedMenu = document.querySelector(".openedMenu");
  const body = document.body;

  if (hamburger && openedMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("opened");
      openedMenu.classList.toggle("active");
      
      // Prevent body scroll when menu is open
      if (openedMenu.classList.contains("active")) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !openedMenu.contains(e.target)) {
        hamburger.classList.remove("opened");
        openedMenu.classList.remove("active");
        body.style.overflow = "";
      }
    });

    // Close menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && openedMenu.classList.contains("active")) {
        hamburger.classList.remove("opened");
        openedMenu.classList.remove("active");
        body.style.overflow = "";
      }
    });
  }

  // Enhanced scroll effects for header
  const header = document.querySelector("header");
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateHeader() {
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    
    lastScrollY = scrollY;
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestTick, { passive: true });

  // Enhanced form handling with validation
  const contactForm = document.querySelector(".contact form");
  if (contactForm) {
    const inputs = contactForm.querySelectorAll("input, textarea");
    const submitButton = contactForm.querySelector("button[type='submit']");

    // Real-time validation
    inputs.forEach(input => {
      input.addEventListener("blur", validateField);
      input.addEventListener("input", clearErrors);
    });

    function validateField(e) {
      const field = e.target;
      const value = field.value.trim();
      const fieldGroup = field.closest(".form-group");
      
      // Remove existing error states
      fieldGroup.classList.remove("error", "success");
      const existingError = fieldGroup.querySelector(".error-message");
      if (existingError) existingError.remove();

      // Validate based on field type
      let isValid = true;
      let errorMessage = "";

      if (field.hasAttribute("required") && !value) {
        isValid = false;
        errorMessage = "This field is required";
      } else if (field.type === "email" && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = "Please enter a valid email address";
        }
      }

      // Apply validation state
      if (!isValid) {
        fieldGroup.classList.add("error");
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message";
        errorDiv.textContent = errorMessage;
        fieldGroup.appendChild(errorDiv);
      } else if (value) {
        fieldGroup.classList.add("success");
      }
    }

    function clearErrors(e) {
      const fieldGroup = e.target.closest(".form-group");
      fieldGroup.classList.remove("error");
      const existingError = fieldGroup.querySelector(".error-message");
      if (existingError) existingError.remove();
    }

    // Enhanced form submission
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Validate all fields
      let isFormValid = true;
      inputs.forEach(input => {
        validateField({ target: input });
        if (input.closest(".form-group").classList.contains("error")) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // Add loading state
        submitButton.classList.add("loading");
        submitButton.textContent = "Sending...";
        
        // Submit form (keeping original action)
        const formData = new FormData(contactForm);
        fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            showNotification("Message sent successfully!", "success");
            contactForm.reset();
            inputs.forEach(input => {
              input.closest(".form-group").classList.remove("success", "error");
            });
          } else {
            showNotification("Failed to send message. Please try again.", "error");
          }
        }).catch(error => {
          showNotification("Failed to send message. Please try again.", "error");
        }).finally(() => {
          submitButton.classList.remove("loading");
          submitButton.textContent = "Send";
        });
      }
    });
  }

  // Notification system
  function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.style.cssText = `
      position: fixed;
      top: 2rem;
      right: 2rem;
      background: var(--glass-bg);
      backdrop-filter: var(--backdrop-blur);
      border: 1px solid var(--glass-border);
      border-radius: 15px;
      padding: 1rem 1.5rem;
      color: var(--text);
      box-shadow: var(--glass-shadow);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      max-width: 300px;
    `;
    
    if (type === "success") {
      notification.style.borderColor = "#10b981";
    } else if (type === "error") {
      notification.style.borderColor = "#ef4444";
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
      notification.style.transform = "translateX(0)";
    });
    
    // Auto remove
    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }

  // Enhanced project interactions
  const projects = document.querySelectorAll(".project");
  projects.forEach(project => {
    project.addEventListener("mouseenter", () => {
      project.style.willChange = "transform";
    });
    
    project.addEventListener("mouseleave", () => {
      project.style.willChange = "auto";
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  }, observerOptions);

  // Observe animated elements
  document.querySelectorAll(".project, .skill, .news-article").forEach(el => {
    observer.observe(el);
  });

  // Enhanced fireworks with better performance
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  const container = document.querySelector(".background2");
  
  if (container && typeof Fireworks !== "undefined") {
    const fireworks = new Fireworks.default(container, {
      sound: {
        enabled: false, // Disabled for better performance
      },
      autoresize: true,
      opacity: 0.3,
      acceleration: 1.02,
      friction: 0.98,
      gravity: 1.2,
      particles: 30, // Reduced for performance
      traceLength: 3,
      traceSpeed: 5,
      explosion: 5,
      intensity: 5, // Reduced for performance
      flickering: 40,
      lineStyle: "round",
      hue: {
        min: 0,
        max: 360,
      },
      delay: {
        min: 80,
        max: 150,
      },
      rocketsPoint: {
        min: 50,
        max: 50,
      },
      lineWidth: {
        explosion: {
          min: 1,
          max: 2,
        },
        trace: {
          min: 1,
          max: 2,
        },
      },
      brightness: {
        min: 50,
        max: 80,
      },
      decay: {
        min: 0.01,
        max: 0.02,
      },
      mouse: {
        click: false,
        move: false,
        max: 1,
      },
    });

    if (month === 12 || (month === 1 && day <= 10)) {
      // Special New Year's Eve settings
      if (month === 12 && day === 31) {
        if ((hours === 0 && minutes >= 0 && minutes <= 45) || 
            (hours === 23 && minutes >= 59) || 
            (hours === 0 && minutes === 0)) {
          fireworks.updateOptions({
            intensity: 15,
          });
        }
      }
      fireworks.start();
    } else {
      fireworks.stop();
    }
  }

  // Performance monitoring
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData.loadEventEnd - perfData.loadEventStart > 3000) {
          console.warn('Page load time is high. Consider optimizing assets.');
        }
      }, 0);
    });
  }
});

// Enhanced openLink function with analytics
function openLink(url) {
  // Add loading state to clicked element
  const clickedElement = event.target.closest('.project, .news-article');
  if (clickedElement) {
    clickedElement.classList.add('loading');
    setTimeout(() => {
      clickedElement.classList.remove('loading');
    }, 1000);
  }
  
  // Open link
  window.open(url, "_blank", "noopener,noreferrer");
  
  // Simple analytics (if needed)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: 'outbound',
      event_label: url,
    });
  }
}

// Utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Enhanced resize handler
const handleResize = debounce(() => {
  // Update any size-dependent calculations
  const circle = document.querySelector(".circle");
  if (circle && window.innerWidth <= 800) {
    circle.style.display = "none";
  } else if (circle) {
    circle.style.display = "block";
  }
}, 250);

window.addEventListener("resize", handleResize, { passive: true });