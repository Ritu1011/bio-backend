const mongoose=require("mongoose")

const schoolSchema= new mongoose.Schema(
    {
    _id: {type:Number, required:true},
    school:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
      _id : false 
    }
  );

  const schoolData=mongoose.model("school",schoolSchema)
  module.exports=schoolData