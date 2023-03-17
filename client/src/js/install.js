const butInstall = document.getElementById('buttonInstall');

// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    
    // Store the triggered events
    window.deferredPrompt = event;
    
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

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  butInstall.textContent = 'Installed!';
  console.log('👍', 'appinstalled', event);
});