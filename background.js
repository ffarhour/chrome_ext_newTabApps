function checkUpdate(tabID){
    chrome.tabs.onUpdated.addListener(function(tabID,changeInfo,tab){
        if (changeInfo.status == "complete") {
            //alert(tab.url);
            if(tab.url=="chrome://newtab/"){
                chrome.tabs.update(tabID,{url:"chrome://apps/"});
            };
        }
    });
};
chrome.tabs.onCreated.addListener(function(tab) {

    // chrome.tabs.query({
    //     url:"chrome://newtab/"
    //     }, function(array_of_Tabs) {
    //         var mytab = array_of_Tabs[0];
    //         alert(mytab);
    //         chrome.tabs.update(mytab.id,{url:"chrome://apps/"});
    //     }
    // );


    checkUpdate(tab.id);
    //alert(mytabURL)

    //setTimeout(function(){ chrome.tabs.update({url:"chrome://apps/"}); }, 1000);
});
