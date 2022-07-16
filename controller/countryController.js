const Country = require("../model/countryModel");
const HandlerController = require("../controller/handlerController");

const getAllCountry = (req, res, next) => {
   HandlerController.getAll(req, res, Country);
};
const GetOneCountry = (req, res, next) => {
   HandlerController.GetOne(req, res, Country);
};
const getCountry = (req, res, next) => {
   HandlerController.Add(req, res, Country);
};
const UpdateCountry = (req, res, next) => {
   HandlerController.UpdateCountry(req, res, Country);
};
const DeleteCountry = (req, res, next) => {
   HandlerController.Delete(req, res, Country);
};

module.exports = { getCountry, getAllCountry, GetOneCountry, UpdateCountry, DeleteCountry };
