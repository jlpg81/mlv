/*=======================================================

  			  ROUTES FOR THE MAIN SECTION

  =======================================================*/


  const 	express 	= require("express"),
  router 		= express.Router(),
  ctrl		= require("../controllers/register");

// RENDERS LOGIN FORM
router.get("/register", ctrl.home);

module.exports = router;