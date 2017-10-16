var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pricesSchema = new Schema({
  name: String,
  price: Number
});
mongoose.model('prices', pricesSchema);
