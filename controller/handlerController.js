const getAll = async (req, res, Model) => {
   const datas = await Model.find();

   res.status(200).json({
      status: "succes",
      data: datas,
   });
};

const GetOne = async (req, res, Model) => {
   const data = await Model.findById(req.params.id);

   res.status(200).json({
      status: "success",
      data: data,
   });
};
const Add = async (req, res, Model) => {
   const data = await Model.create(req.body);
   res.status(201).json({
      status: "success add data",
      data: data,
   });
};
const update = async (req, res, Model) => {
   const data = await Model.findByIdAndUpdate(req.params.id, req.body);
   res.status(200).json({
      status:"success update",
      data:data
   })
};
const Delete=async (req,res,Model)=>{
   const data =await Model.findByIdAndDelete(req.params.id)
   res.status(200).json({
      status:"success delete",
      data:data
   })
}

module.exports = { getAll, GetOne, Add,update ,Delete};
