const router = require("express").Router();
const CountryController = require("../controller/countryController");
router.route("/").get(CountryController.getAllCountry).post(CountryController.getCountry);

router
   .route("/:id")
   .get(CountryController.GetOneCountry)
   .patch(CountryController.UpdateCountry)
   .delete(CountryController.DeleteCountry);

module.exports = router;
