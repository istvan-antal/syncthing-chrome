document.getElementById('main-view').addEventListener('newwindow', function(e) {
    e.preventDefault();
    chrome.browser.openTab({
        url: e.targetUrl
    });
});