/*=======================================================

  			  ROUTES FOR THE MAIN SECTION

  =======================================================*/


const 	express 	= require("express"),
		router 		= express.Router(),
		ctrl		= require("../controllers/index");

// RENDERS LOGIN FORM
router.get("/", ctrl.home);

module.exports = router;