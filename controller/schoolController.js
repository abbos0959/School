const School = require("../model/scholModel");
const HandlerController = require("../controller/handlerController");

const getAllSchool = (req, res, next) => {
   HandlerController.getAll(req, res, School);
};
const GetOneSchool = (req, res, next) => {
   HandlerController.GetOne(req, res, School);
};
const getSchool = (req, res, next) => {
   HandlerController.Add(req, res, School);
};
const UpdateSchool = (req, res, next) => {
   HandlerController.UpdateSchool(req, res, School);
};
const DeleteSchool = (req, res, next) => {
   HandlerController.Delete(req, res, School);
};

module.exports = { getSchool, getAllSchool, GetOneSchool, UpdateSchool, DeleteSchool };
