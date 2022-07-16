const District = require("../model/districtModel");
const HandlerController = require("../controller/handlerController");

const getAllDistrict = (req, res, next) => {
   HandlerController.getAll(req, res, District);
};
const GetOneDistrict = (req, res, next) => {
   HandlerController.GetOne(req, res, District);
};
const getDistrict = (req, res, next) => {
   HandlerController.Add(req, res, District);
};
const UpdateDistrict = (req, res, next) => {
   HandlerController.UpdateDistrict(req, res, District);
};
const DeleteDistrict = (req, res, next) => {
   HandlerController.Delete(req, res, District);
};

module.exports = { getDistrict, getAllDistrict, GetOneDistrict, UpdateDistrict, DeleteDistrict };
