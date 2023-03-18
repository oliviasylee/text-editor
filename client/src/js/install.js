const butInstall = document.getElementById('buttonInstall');

// When the "beforeinstallprompt" event is triggered, it prevents the default behavior and makes the "Install" button visible
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.style.visibility = 'visible';

  // Store the triggered events
  window.deferredPrompt = event;

  // When the "buttonInstall" button is clicked, the user will be prompted to choose if they want to install the app
  butInstall.addEventListener('click', async () => {
    window.deferredPrompt.prompt();
    const { outcome } = await window.deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('The app was installed successfully.');
      butInstall.textContent = 'Installed!';
    } else {
      console.log('The app was not installed.');
    }
    window.deferredPrompt = null;
  });
});