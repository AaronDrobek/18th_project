const express = require("express");
const Pens    = require("../models/pens");
const router  = express.Router();



router.get("/", function(req,res){

  Pens.find({})
  .then(function(pens){
    res.render("collection", {users: pens});
  })


});
router.post("/delete", function(req,res){
  let name = req.body.delete;

console.log(req.body.delete, "name log");
  Pens.deleteOne({name:name})
  .then(function(data){
    res.redirect('/')
  })
  .catch(function(err){

  })
})




router.get("/collection", function(req,res){

  Pens.find({})
  .then(function(pens){
    res.render("collection", {users: pens});
  })


});





router.get("/create", function(req,res){
  Pens.find({})
  .then(function(pens){
    res.render("create");
    });

});

router.get("/edit/:name", function(req,res){
  Pens.find({name: req.params.name})
  .then(function(pens){
    res.render("edit", {users: pens});
    });
})

router.post("/create", function(req, res){
  Pens.create({
    name: req.body.name,
    length: req.body.length ,
    color: req.body.color,
    writingType: req.body.writingType,
    description:[{
      activation: req.body.activation ,
      inkColor: req.body.inkColor ,
      material: req.body.material
    }],
    refillable: req.body.refillable,
    weight: req.body.weight ,
    price: req.body.price,
  })

  .then(function(data){
  console.log(data);
  })
  .catch(function(err){
  console.log(err);
  })

res.redirect("/");
})

router.post("/edit/:name", function(req, res){
  Pens.update({
    name: req.body.name,
    length: req.body.length,
    color: req.body.color,
    writingType: req.body.writingType,
    description:[{
      activation: req.body.activation ,
      inkColor: req.body.inkColor,
      material: req.body.material
    }],
    refillable: req.body.refillable,
    weight: req.body.weight,
    price: req.body.price,
  })

  .then(function(data){
  console.log(data);
  })
  .catch(function(err){
  console.log(err);
  })

res.redirect("/");
})


module.exports = router;
