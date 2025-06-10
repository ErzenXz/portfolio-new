// Enhanced theme.js with smooth transitions and system preference detection

class ThemeManager {
  constructor() {
    this.body = document.querySelector("body");
    this.modeToggle = document.querySelector("#dark-mode-toggle");
    this.prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    
    this.init();
  }

  init() {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = this.prefersDark.matches ? "dark" : "light";
    const currentTheme = savedTheme || systemTheme;

    this.setTheme(currentTheme);
    this.bindEvents();
    this.updateToggleIcon();
  }

  setTheme(theme) {
    // Add transition class for smooth theme switching
    this.body.classList.add("theme-transition");
    
    if (theme === "dark") {
      this.body.classList.add("dark");
    } else {
      this.body.classList.remove("dark");
    }

    // Save preference
    localStorage.setItem("theme", theme);
    
    // Update meta theme-color for mobile browsers
    this.updateMetaThemeColor(theme);
    
    // Remove transition class after animation
    setTimeout(() => {
      this.body.classList.remove("theme-transition");
    }, 300);
  }

  toggleTheme() {
    const currentTheme = this.body.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    this.setTheme(newTheme);
    this.updateToggleIcon();
    this.animateToggle();
  }

  updateToggleIcon() {
    const icon = this.modeToggle.querySelector("i");
    const isDark = this.body.classList.contains("dark");
    
    if (icon) {
      // Smooth icon transition
      icon.style.transform = "scale(0)";
      setTimeout(() => {
        icon.className = isDark 
          ? "fa-solid fa-sun" 
          : "fa-solid fa-moon";
        icon.style.transform = "scale(1)";
      }, 150);
    }
  }

  animateToggle() {
    // Add ripple effect to toggle button
    const ripple = document.createElement("div");
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      margin-top: -50px;
      margin-left: -50px;
    `;
    
    this.modeToggle.style.position = "relative";
    this.modeToggle.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  }

  updateMetaThemeColor(theme) {
    let metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.getElementsByTagName("head")[0].appendChild(metaThemeColor);
    }
    
    metaThemeColor.content = theme === "dark" ? "#0a0a0a" : "#f8fafc";
  }

  bindEvents() {
    // Toggle button click
    if (this.modeToggle) {
      this.modeToggle.addEventListener("click", () => {
        this.toggleTheme();
      });

      // Keyboard support
      this.modeToggle.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.toggleTheme();
        }
      });
    }

    // Listen for system theme changes
    this.prefersDark.addEventListener("change", (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem("theme")) {
        this.setTheme(e.matches ? "dark" : "light");
        this.updateToggleIcon();
      }
    });

    // Keyboard shortcut (Ctrl/Cmd + Shift + D)
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "D") {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }
}

// Add CSS for smooth theme transitions
const style = document.createElement("style");
style.textContent = `
  .theme-transition * {
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  #dark-mode-toggle i {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  #dark-mode-toggle:hover {
    transform: translateY(-5px) scale(1.1) rotate(10deg);
  }

  #dark-mode-toggle:active {
    transform: translateY(-3px) scale(1.05);
  }

  /* Improved focus styles */
  #dark-mode-toggle:focus-visible {
    outline: 2px solid var(--text-sel);
    outline-offset: 4px;
  }

  /* Loading state for theme toggle */
  #dark-mode-toggle.loading {
    pointer-events: none;
    opacity: 0.7;
  }

  /* Enhanced hover effects */
  #dark-mode-toggle::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: var(--glass-bg);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  #dark-mode-toggle:hover::before {
    opacity: 0.5;
  }
`;

document.head.appendChild(style);

// Initialize theme manager when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new ThemeManager();
  });
} else {
  new ThemeManager();
}

// Export for potential external use
window.ThemeManager = ThemeManager;

// Add theme detection utilities
window.getTheme = () => {
  return document.body.classList.contains("dark") ? "dark" : "light";
};

window.setTheme = (theme) => {
  if (window.themeManager) {
    window.themeManager.setTheme(theme);
  }
};

// Store theme manager instance globally
document.addEventListener("DOMContentLoaded", () => {
  window.themeManager = new ThemeManager();
});