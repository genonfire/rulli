chrome.runtime.onStartup.addListener(function () {
  chrome.storage.sync.get({
    version: 1,
    hotdealSourceURL: '#board_read > div > div.board_main > div.board_main_view > div.source_url > a',
    fmdealSourceURL: '#bd_capture > div.rd_hd.clear > div.board.clear > table > tbody > tr:nth-child(1) > td > div > a',
    ppomppuSourceURL: 'body > div > div.contents > div.container > div > table:nth-child(n+10) > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(5) > div > div.sub-top-text-box > div > a'
  }, function(items) {
    fetch('http://www.gencode.me/api/rulli/scheme.json', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      if (data.selector_version > items.version) {
          chrome.storage.sync.set({
            version: data.selector_version,
            hotdealSourceURL: data.selector_hotdeal_sourceurl,
            fmdealSourceURL: data.selector_fmdeal_sourceurl,
            ppomppuSourceURL: data.selector_ppomppu_sourceurl
          });
        }
    });
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  if (request.action == 'xhttp') {
    fetch(request.url, {
      method: request.method
    })
    .then(response => response.json())
    .then(data => callback(data));

    return true;
  }
});
