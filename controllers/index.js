/*=======================================================

  			  CONTROLLERS FOR THE MAIN SECTION

  =======================================================*/

var 	ctrl 	= {};

/*======================================
		  RENDERS HOME PAGE
  ======================================*/

ctrl.home = function(req, res) {
	res.render("home");
};

module.exports = ctrl;
