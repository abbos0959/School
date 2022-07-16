const router = require("express").Router();
const ScholController = require("../controller/schoolController");
router.route("/").get(ScholController.getAllSchool).post(ScholController.getSchool);

router
   .route("/:id")
   .get(ScholController.GetOneSchool)
   .patch(ScholController.UpdateSchool)
   .delete(ScholController.DeleteSchool);

module.exports = router;
