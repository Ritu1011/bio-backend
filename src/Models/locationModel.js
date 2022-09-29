const mongoose=require("mongoose")

const locationSchema= new mongoose.Schema(
    {
    id: {type:Number, required:true},
    city:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
    }
  );

  const locationData=mongoose.model("location",locationSchema)
  module.exports=locationData