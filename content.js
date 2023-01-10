function linksIrradiator() {
  chrome.storage.sync.get({
    version: 1,
    hotdealSourceURL: '#board_read > div > div.board_main > div.board_main_view > div.source_url > a',
    fmdealSourceURL: '#bd_capture > div.rd_hd.clear > div.board.clear > table > tbody > tr:nth-child(1) > td > div > a',
    ppomppuSourceURL: 'body > div > div.contents > div.container > div > table:nth-child(n+10) > tbody > tr:nth-child(3) > td > table > tbody > tr > td:nth-child(5) > div > div.sub-top-text-box > div > a'
  }, function(items) {
    const host = window.location.host;

    if (host.includes('ruliweb.com')) {
      var url = document.querySelector(items.hotdealSourceURL);

      if (url) {
        if (url.href != url.text) {
          url.href = url.text;
        }
      }
    }
    else if (host.includes('fmkorea.com')) {
      var url = document.querySelector(items.fmdealSourceURL);

      if (url) {
        if (url.href != url.text) {
          url.href = url.text
        }
      }
    }
    else if (host.includes('ppomppu.co.kr')) {
      var url = document.querySelector(items.ppomppuSourceURL);

      if (url) {
        if (url.href != url.text) {
          url.href = url.text
        }
      }
    }
  });
}

function syncQueryString() {
  chrome.runtime.sendMessage({
    method: 'GET',
    action: 'xhttp',
    url: 'http://api.gencode.me/rulli/index.php'
    }, function(response) {
      chrome.storage.sync.set({
        version: data.selector_version,
        hotdealSourceURL: data.selector_hotdeal_sourceurl,
        fmdealSourceURL: data.selector_fmdeal_sourceurl,
        ppomppuSourceURL: data.selector_ppomppu_sourceurl
      });
  })
}

linksIrradiator();
