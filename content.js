function rulliIrradiator() {
  chrome.storage.sync.get({
    version: 1,
    hotdealSourceURL: '#board_read > div > div.board_main > div.board_main_view > div.source_url > a'
  }, function(items) {
    console.log(items.version, items.hotdealSourceURL);
    hotdealSourceURL = document.querySelector(items.hotdealSourceURL);
    if (hotdealSourceURL) {
      if (hotdealSourceURL.href != hotdealSourceURL.text) {
        hotdealSourceURL.href = hotdealSourceURL.text;
      }
    }
  });
}

function syncQueryString() {
  chrome.runtime.sendMessage({
    method: 'GET',
    action: 'xhttp',
    url: 'http://api.gencode.me/rulli/'
    }, function(response) {
      console.log(response);
      var data = JSON.parse(response);
      chrome.storage.sync.set({
        version: data.selector_version,
        hotdealSourceURL: data.selector_hotdeal_sourceurl
      });
  })
}

rulliIrradiator();
// syncQueryString();
