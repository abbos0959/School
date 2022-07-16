const Student = require("../model/studentModel");
const HandlerController = require("../controller/handlerController");

const getAllStudent = (req,re,next)=>{ HandlerController.getAll(req, res, Student)}
const GetOneStudent = (req,res,next)=>{ HandlerController.GetOne(req, res, Student)}
const getStudent =(req,res,next)=>{  HandlerController.Add(req, res, Student)}
const UpdateStudent = (req,res,next)=>{ HandlerController.UpdateStudent(req, res, Student)}
const DeleteStudent =  (req,res,next)=>{ HandlerController.Delete(req, res, Student)}

module.exports = { getStudent, getAllStudent, GetOneStudent, UpdateStudent, DeleteStudent };
