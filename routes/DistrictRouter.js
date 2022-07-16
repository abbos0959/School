const router = require("express").Router();
const DistrictController = require("../controller/districtController")
router.route("/").get(DistrictController.getAllDistrict).post(DistrictController.getDistrict);

router
   .route("/:id")
   .get(DistrictController.GetOneDistrict)
   .patch(DistrictController.UpdateDistrict)
   .delete(DistrictController.DeleteDistrict);

module.exports = router;
