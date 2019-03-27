var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
	name: String
	//required: [ true, 'Name field is required' ]
});

module.exports = mongoose.model('bears', BearSchema);
