        function loadJSON(callback) {
        var xobj = new XMLHttpRequest();
         xobj.overrideMimeType("application/json");
        xobj.open('GET',
        'https://jsonp.afeld.me/?url=http://backtesting.bitcoinfutures.info/daily.json', true);
        xobj.onreadystatechange = function () {
           if (xobj.readyState == 4 && xobj.status == "200") {
             callback(xobj.responseText);
           }
        };
        xobj.send(null);
        }
        function init() {
        loadJSON(function(response) {
        var actual_JSON = JSON.parse(response);
        var data = actual_JSON['data'];
        for (var i = 0, len = data.length; i < len; i++) {

          str = data[i]['body'];
          if(str.length > 500) str = str.substring(0,500) + "...";

          document.getElementById("reddit-daily" + i).innerHTML =
                "<a target=\"_blank\" href=\"https://np.reddit.com/r/bitcoinmarkets\">Score: "
                + data[i]['score'] + "</a> - Posted by <a target=\"_blank\" href=\"https://np.reddit.com/u/" + data[i]['author'] + "\">/u/" + data[i]['author'] + "</a><div><small>"
                + str + "</small></div><br>";
          }
         });
        }

        init();
