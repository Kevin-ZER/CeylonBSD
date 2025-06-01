// Get page name from current URL
const pageName = window.location.pathname.split('/').pop().split('.')[0] || 'Home';
const formattedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

// Create loading elements
const splashContainer = document.querySelector('.splash-container');
const loadingContainer = document.createElement('div');
loadingContainer.className = 'loading-container';

const loadingText = document.createElement('div');
loadingText.className = 'loading-text';
loadingText.textContent = formattedPageName;

const cyberProgress = document.createElement('div');
cyberProgress.className = 'cyber-progress';

const progressFill = document.createElement('div');
progressFill.className = 'progress-fill';

// Construct the loading UI
cyberProgress.appendChild(progressFill);
loadingContainer.appendChild(loadingText);
loadingContainer.appendChild(cyberProgress);
splashContainer.appendChild(loadingContainer);

// Progress bar animation
function updateProgress() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    progressFill.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        splashContainer.style.display = 'none';
      }, 200);
    }
  }, 25);
}

// Start progress when page loads
if (document.readyState === 'complete') {
  updateProgress();
} else {
  window.addEventListener('load', updateProgress);
} 