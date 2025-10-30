async function getCurrentDomain() {
    return await new Promise(resolve => {
        browser.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            resolve(tabs[0].url.split('/')[2].split('.').reverse()[1])
        });
    });
}

async function getConfig() {
    return await browser.runtime.sendMessage({ type: "alias" });
}
