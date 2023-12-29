const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/notes")

const userSchema=mongoose.Schema({
  subject:String,
  detail:String,
  datecreated:{
    type:Date,
    default:Date.now()
  }
})

module.exports=mongoose.model("user",userSchema)