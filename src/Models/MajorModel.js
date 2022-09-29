const mongoose=require("mongoose")

const majorSchema= new mongoose.Schema(
    {
    id: {type:Number, required:true},
    major:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
    }
  );

  const majorData=mongoose.model("major",majorSchema)
  module.exports=majorData