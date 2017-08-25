const mongoose    = require("mongoose");
mongoose.Promise  = require("bluebird");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/pens");


const pensSchema = new Schema({
  name: {type: String, required: true, unique: true},
  length: {type: String},
  color: {type: String},
  writingType: {type: String},
  description:[{
    activation: String,
    inkColor: String,
    material: String

  }],
  refillable: {type: Boolean},
  weight: {type: Number},
  price: {type: Number},
});


const Pens = mongoose.model("Pens", pensSchema);

module.exports = Pens;
