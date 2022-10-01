const mongoose=require("mongoose")

const locationSchema= new mongoose.Schema(
    {
     _id: {type:Number, required:true},
    city:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
      _id : false 
    }
  );

  const locationData=mongoose.model("location",locationSchema)
  module.exports=locationData