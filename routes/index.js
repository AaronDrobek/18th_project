const express = require("express");
const Pens    = require("../models/pens");
const router  = express.Router();



router.get("/", function(req,res){

  Pens.find({})
  .then(function(pens){
    res.render("collection", {users: pens});
  })


});





//   router.get("/", function(req,res){
//
// let users = db.collection("Pens");
// console.log(users);
//   res.render("collection", data);
//   });



router.get("/edit", function(req,res){
    res.render("edit");
    });


router.post("/edit", function(req, res){
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

module.exports = router;
