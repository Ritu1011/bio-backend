const mongoose=require("mongoose")

const religionSchema= new mongoose.Schema(
    {
    id: {type:Number, required:true},
    religion:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
    }
  );

  const religionData=mongoose.model("religion",religionSchema)
  module.exports=religionData