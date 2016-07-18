//function to check if the tab has completed updating, and if it is a NEW TAB redirects it to the Apps page.
function checkUpdate(tabID){
    //flag for stopping the onUpdated event listener
    var invalid = false;
    //event fired when the new tab is updated.
    chrome.tabs.onUpdated.addListener(function(tabID,changeInfo,tab){
        //if completed loaded, checks if it is a new tab and updates it with a new url
        if (changeInfo.status == "complete") {
            //alert(tab.url);
            if(tab.url=="chrome://newtab/" || tab.url=="about:blank"){
                chrome.tabs.update(tabID,{url:"chrome://apps/"});
            };
            //log to console
            console.log("new tab redirected to Apps page");
            //set flag to true to stop the parent function
            var invalid = true;
            return;
        }
    });
    if(invalid){
        return;
    };
};

//event listener for when a new tab is created
chrome.tabs.onCreated.addListener(function(tab) {
    //pass the tab id of the new tab to the checkUpdate function
    checkUpdate(tab.id);
});

//function to create a new tab directed to apps page
function createAppsTab(){
    chrome.tabs.create({url:"chrome://apps/"});
}
//when icon pressed, direct to apps page
chrome.browserAction.onClicked.addListener(createAppsTab);
