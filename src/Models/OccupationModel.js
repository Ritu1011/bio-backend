const mongoose=require("mongoose")

const occupationSchema= new mongoose.Schema(
    {
    id: {type:Number, required:true},
    occupation:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
    }
  );

  const occupationData=mongoose.model("occupation",occupationSchema)
  module.exports=occupationData