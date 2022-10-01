const mongoose=require("mongoose")

const occupationSchema= new mongoose.Schema(
    {
      _id: {type:Number, required:true},
    occupation:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
      _id : false 
    }
  );

  const occupationData=mongoose.model("occupation",occupationSchema)
  module.exports=occupationData