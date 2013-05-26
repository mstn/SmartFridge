var http = require('http');
var $ = require('jquery');
var cache = {
	'pot1': undefined
};

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: '192.168.1.199',
  path: '/status.xml'
};

var serverOptions = {
  host: 'smartfridge.meteor.com',
  path: '/api/resources',
  method: 'POST'
};

var activeOptions = {
  host: '192.168.1.199',
  path: '/leds.cgi?led=0'
};


var callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
	var pot1 = $(str).find("pot1").html();
	console.log($(str).find("pot1").html());
	timeMills = new Date().getTime();
	if (pot1 > 75)
	{
		// on
		//console.log( cache['pot1'] + "****");
		if ( cache['pot1'] < 75 ){
			//event on
			console.log("on");
			var request = http.request(serverOptions);
			request.write('{"name":"pot1","value":"Open","time":"'+timeMills+'"}');
			request.end();
		}
	}
	if (pot1 < 75)
	{
		// on
		if (  cache['pot1'] > 75 ){
			//event off
			console.log("off");
			
			var request = http.request(serverOptions);
			request.write('{"name":"pot1","value":"Closed","time":"'+timeMills+'"}');
			request.end();
		}
	}	
	cache['pot1'] = pot1;
    //console.log(str);
  });
};

setInterval(function () {
http.request(options, callback).end(); },200);

// active

setInterval(function () {
http.request(serverOptions, activeCallback).end(); },500);

var activeCallback = function(response) {
  var str = '';

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
	console.log(str);
    if (str == 'switch')
	{
		http.request(activeOptions).end();
		
	}
  });

}



// NEW!



var callback2 = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
	var pot0 = $(str).find("pot0").html();
	console.log($(str).find("pot0").html());
	timeMills = new Date().getTime();
	if (pot0 > 500)
	{
		// on
		//console.log( cache['pot1'] + "****");
		if ( cache['pot0'] < 500 ){
			//event on
			console.log("on");
			var request = http.request(serverOptions);
			request.write('{"name":"pot0","value":"No milk","time":"'+timeMills+'"}');
			request.end();
		}
	}
	if (pot0 < 500)
	{
		// on
		if (  cache['pot0'] > 500 ){
			//event off
			console.log("off");
			
			var request = http.request(serverOptions);
			request.write('{"name":"pot0","value":"I have milk","time":"'+timeMills+'"}');
			request.end();
		}
	}	
	cache['pot0'] = pot0;
    //console.log(str);
  });
};

setInterval(function () {
http.request(options, callback2).end(); },200);
