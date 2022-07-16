const router = require("express").Router();
const GroupController = require("../controller/groupController");
router.route("/").get(GroupController.getAllGroup).post(GroupController.getGroup);

router
   .route("/:id")
   .get(GroupController.GetOneGroup)
   .patch(GroupController.UpdateGroup)
   .delete(GroupController.DeleteGroup);

module.exports = router;
