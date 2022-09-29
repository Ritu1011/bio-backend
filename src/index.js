const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())

const LocationController=require("./controllers/location")
const schoolController=require("./controllers/School")
const majorController=require("./controllers/Major")
const occupationController=require("./controllers/Occuption")
const religionController=require("./controllers/Religion")
const reasonController=require("./controllers/Reason")
app.use(express.json()) 


app.use("/location",LocationController)
app.use("/school",schoolController)
app.use("/major",majorController)

app.use("/occupation",occupationController)
app.use("/religion",religionController)
app.use("/reason",reasonController)
module.exports=app 