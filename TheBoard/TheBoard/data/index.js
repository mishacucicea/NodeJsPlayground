(function (data) {
	var seedData = require("./seedData");

	data.getNoteCategories = function (next) {
		// error is null.
		next(null, seedData.initialNotes);
	};
	
})(module.exports);