var express = require("express");
var strftime = require("strftime");
var app = express();
app.get("/:dateInput", function(request, response){
	var dateInput;
	var unix;
	var stringTime = null;
	if(isNaN(parseInt(request.params.dateInput))){
		dateInput = new Date(request.params.dateInput);
		if(dateInput==null){
			stringTime =  strftime('%B %d, %Y', dateInput);
		}
	}
	else{
		//response.send(request.params);
		dateInput = new Date(parseInt(request.params.dateInput)*1000);
	}
	//response.send(parseInt(request.params.dateInput));
	console.log(parseInt(request.params.dateInput));
	unix = dateInput.getTime()/1000;
	var dateObject = {'unix': unix, 'natural': stringTime};
	//response.writeHead(200, {'content-type' : 'text/json'});
	response.send(dateObject);
	response.end();
});
app.listen(process.env.PORT || 5000);

