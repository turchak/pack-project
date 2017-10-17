const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let pricesSchema = new Schema({
  name: String,
  price: Number
});
mongoose.model('prices', pricesSchema);
