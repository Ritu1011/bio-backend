const express =require("express")
const Location =require("../Models/nameModel")

const router=express.Router()

router.get("", async (req, res) => {
    try {
      const location = await Location.find().lean().exec();
      return res.status(200).send(location); 
    } catch (err) {
      return res
        .status(500)
        .send({ message:err.message });
    }
  });
    router.post("", async (req, res) => {
    try {
      const  location  = await Location.create(req.body);
      return res.status(201).send( location  );
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const location = await Location.findById(req.params.id).lean().exec();
   
  
      return res.status(200).send(location);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  

module.exports=router