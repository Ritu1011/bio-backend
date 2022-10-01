const mongoose=require("mongoose")

const reasonSchema= new mongoose.Schema(
    {
    _id: {type:Number, required:true},
    reason:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
      _id : false 
    }
  );

  const reasonData=mongoose.model("reason",reasonSchema)
  module.exports=reasonData