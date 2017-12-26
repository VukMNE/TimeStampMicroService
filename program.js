var express = require("express");
var strftime = require("strftime");
var app = express();
app.use(express.static('./public'));
app.get("/:dateInput", function(request, response){
	var dateInput;
	var unix;
	var stringTime = null;
	if(isNaN(parseInt(request.params.dateInput))){
		dateInput = new Date(request.params.dateInput);
		if(dateInput.toDateString() != "Invalid Date"){
			stringTime =  strftime('%B %d, %Y', dateInput);
		}
	}
	else{
		dateInput = new Date(parseInt(request.params.dateInput)*1000);
		stringTime =  strftime('%B %d, %Y', dateInput);
	}
	unix = dateInput.getTime()/1000;
	var dateObject = {'unix': unix, 'natural': stringTime};

	response.send(dateObject);
	response.end();
});
app.listen(process.env.PORT || 5000);

