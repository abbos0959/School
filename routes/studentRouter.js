const router = require("express").Router();
const StudenController = require("../controller/studentController");
router.route("/").get(StudenController.getAllStudent).post(StudenController.getStudent);

router
   .route("/:id")
   .get(StudenController.getAllStudent)
   .patch(StudenController.UpdateStudent)
   .delete(StudenController.DeleteStudent);

module.exports = router;
