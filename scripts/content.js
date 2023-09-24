const buttonElements = document.getElementsByTagName('button')

const clickButtons = () => {
  for(let i = 0; i < buttonElements.length; i++){
    const button = buttonElements[i]

    if((button.textContent.includes('Connect') || button.textContent.includes('Follow')) && !button.textContent.includes('Connections')){
      setTimeout(() => {
        button.click()
      }, 1000)

      setTimeout(() => {
        const sendButtons = document.getElementsByTagName('button')
        for(let i = 0; i < buttonElements.length; i++){
          const btn = sendButtons[i]

          if(btn.textContent.includes('Send')) {
            btn.click()
          } else {
            continue
          }
        }
      }, 1000)
    }
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'runScript') {
    clickButtons();
    sendResponse({status: 'completed'})
  }
});