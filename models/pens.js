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
    activation: {type: String},
    inkColor: {type: String},
    material: {type: String}
  }],
  refillable: {type: Boolean},
  weight: {type: Number},
  price: {type: Number},
});


const Pens = mongoose.model("Pens", pensSchema);

module.exports = Pens;
