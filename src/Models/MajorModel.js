const mongoose=require("mongoose")

const majorSchema= new mongoose.Schema(
    {
      _id: {type:Number, required:true},
    major:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
      _id : false 
    }
  );

  const majorData=mongoose.model("major",majorSchema)
  module.exports=majorData