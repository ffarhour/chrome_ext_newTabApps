chrome.tabs.onCreated.addListener(function(tab) {
    chrome.tabs.update({url:"chrome://apps/"});
});
