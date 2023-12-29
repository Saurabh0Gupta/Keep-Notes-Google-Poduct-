var express = require('express');
var router = express.Router();
const userModel=require('./users')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const notes= await userModel.find()
  res.render('index',{notes})
});
router.get('/create', function(req, res, next) {
 
  res.render('create')
});

router.post('/created',async function(req, res, next) {
    const note= await userModel.create({
      subject:req.body.subject,
      detail:req.body.content,
    })
    res.redirect('/')
});
router.get('/delete/:id', async function(req,res){
  const note=await userModel.findOneAndDelete({_id:req.params.id})
  res.redirect('/')
})
router.get('/update/:id',async function(req,res){
  const note=await userModel.findOne({_id:req.params.id})
  res.render('update',{note})
})
router.post('/updated/:id',async function(req,res){
  const note=await userModel.findOneAndUpdate({_id:req.params.id},{subject:req.body.subject, detail:req.body.content, datecreated:Date.now()})
  res.redirect('/')
})

module.exports = router;
