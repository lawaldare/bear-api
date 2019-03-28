var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255
	},
	color: {
		type: String,
		required: true
	}
 
	//required: [ true, 'Name field is required' ]
});

module.exports = mongoose.model('bears', BearSchema);
