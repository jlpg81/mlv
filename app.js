
/*=======================================================

  			 		 MAIN APPLICATION

  =======================================================*/


const 	express 		= require("express"),
		app 			= express(),
		bodyParser 		= require("body-parser"),
		mongoose		= require("mongoose"),
		index 			= require("./routes/index");
		register 		= require("./routes/register");

mongoose.connect("mongodb://localhost/mlv", {useNewUrlParser: true}, function(err, db) {
	if(err) {
		console.log(err);
	} else {
		console.log("Connected to database!")
	}
});

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(index);
app.use(register);

app.listen(3000, function() {
	console.log("Initialized in port 3000.");
});