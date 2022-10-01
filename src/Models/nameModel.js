const mongoose=require("mongoose")

const NameSchema= new mongoose.Schema(
    {
    _id: {type:Number, required:true},
    name:{type: String, required:true},
    gender:{type: String, required:true}
     },
    {
      versionKey: false,
      timestamps: true, 
       _id : false 
    }
  );

  const NameData=mongoose.model("name",NameSchema)
  module.exports=NameData;