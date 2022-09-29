const mongoose=require("mongoose")

const reasonSchema= new mongoose.Schema(
    {
    id: {type:Number, required:true},
    reason:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
    }
  );

  const reasonData=mongoose.model("reason",reasonSchema)
  module.exports=reasonData