async function getCurrentDomain() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.url.split('/')[2].split('.').reverse()[1];
}

async function getConfig() {
    return await chrome.runtime.sendNativeMessage('com.opdehipt.email_alias', {type: 'getAliases'});
}
