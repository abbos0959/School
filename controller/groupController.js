const Group = require("../model/groupModel");
const HandlerController = require("../controller/handlerController");

const getAllGroup = (req, res, next) => {
   HandlerController.getAll(req, res, Group);
};
const GetOneGroup = (req, res, next) => {
   HandlerController.GetOne(req, res, Group);
};
const getGroup = (req, res, next) => {
   HandlerController.Add(req, res, Group);
};
const UpdateGroup = (req, res, next) => {
   HandlerController.UpdateGroup(req, res, Group);
};
const DeleteGroup = (req, rs, next) => {
   HandlerController.Delete(req, res, Group);
};

module.exports = { getGroup, getAllGroup, GetOneGroup, UpdateGroup, DeleteGroup };
