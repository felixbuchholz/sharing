{"filter":false,"title":"wa01.js","tooltip":"/wa01.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":27,"column":0},"action":"insert","lines":["// npm install request","// mkdir data","var urls = ['https://parsons.nyc/aa/m01.html',  ","    'https://parsons.nyc/aa/m02.html',  ","    'https://parsons.nyc/aa/m03.html',  ","    'https://parsons.nyc/aa/m04.html',  ","    'https://parsons.nyc/aa/m05.html',  ","    'https://parsons.nyc/aa/m06.html', ","    'https://parsons.nyc/aa/m07.html',","    'https://parsons.nyc/aa/m08.html',","    'https://parsons.nyc/aa/m09.html',","    'https://parsons.nyc/aa/m10.html'];","","","var request = require('request');","var fs = require('fs');","","function runRequest (urls) {","    for (var i=0; i < urls.length; i++) {","    request(urls[i], function(error, response, body){","        if (!error && response.statusCode == 200) {","            fs.writeFileSync('/home/ec2-user/environment/data/' + [i++ - urls.length] + '.txt', body);","        }","        else {console.log(\"Request failed!\")}","    })}","}","runRequest(urls);",""],"id":2}],[{"start":{"row":27,"column":0},"end":{"row":27,"column":1},"action":"insert","lines":["Í"],"id":3}],[{"start":{"row":27,"column":0},"end":{"row":27,"column":1},"action":"remove","lines":["Í"],"id":4}]]},"ace":{"folds":[],"scrolltop":1.5,"scrollleft":0,"selection":{"start":{"row":17,"column":0},"end":{"row":18,"column":41},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":7,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1599694264988,"hash":"a72bcf537304188c548f4fc732783c7b01df5bcf"}