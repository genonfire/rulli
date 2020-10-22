chrome.runtime.onStartup.addListener(function () {
  chrome.storage.sync.get({
    version: 1,
    hotdealSourceURL: '#board_read > div > div.board_main > div.board_main_view > div.source_url > a'
  }, function(items) {
    $.ajax({
      type: 'GET',
      url: 'http://api.gencode.me/rulli/',
      crossDomain: false,
      dataType: 'html',
      success: function(response) {
        var data = JSON.parse(response);
        if (data.selector_version > items.version) {
          chrome.storage.sync.set({
            version: data.selector_version,
            hotdealSourceURL: data.selector_hotdeal_sourceurl
          });
        }
      }
    });
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  if (request.action == "xhttp") {
    $.ajax({
      type: request.method,
      url: request.url,
      crossDomain: false,
      dataType: 'html',
      success: function(data) {
        callback(data);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        callback();
      }
    });
    return true;
  }
});
