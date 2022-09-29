const mongoose=require("mongoose")

const schoolSchema= new mongoose.Schema(
    {
    id: {type:Number, required:true},
    school:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
    }
  );

  const schoolData=mongoose.model("school",schoolSchema)
  module.exports=schoolData