document.addEventListener('DOMContentLoaded', () => {
  const getTitleButton = document.getElementById('getTitle');
  const titleDisplay = document.getElementById('titleDisplay');

  getTitleButton.addEventListener('click', async () => {
      try {
          let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
          titleDisplay.textContent = `Current Tab Title: ${tab.title}`;
      } catch (error) {
          console.error('Failed to get the tab title:', error);
      }
  });
});
