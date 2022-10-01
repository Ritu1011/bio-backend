const mongoose=require("mongoose")

const religionSchema= new mongoose.Schema(
    {
    _id: {type:Number, required:true},
    religion:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
      _id : false 
    }
  );

  const religionData=mongoose.model("religion",religionSchema)
  module.exports=religionData