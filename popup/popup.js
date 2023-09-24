const runScriptButton = document.getElementById("connect");

runScriptButton.addEventListener("click", async function () {
  // Send a message to the content script
  chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
    const activeTab = tabs[0];

    await chrome.tabs.update(activeTab.id, { muted: true });
    const response = await chrome.tabs.sendMessage(activeTab.id, { action: "runScript" });

    if(response.status === 'completed')
      setTimeout(async () => {
        await chrome.tabs.update(activeTab.id, { muted: false })
      }, 5000)
  });
});
