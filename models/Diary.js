const mongoose = require("mongoose")

const diarySchema = mongoose.Schema({

	markdown: {
		type: String,
		required: true
	},
	mood: {
		type: String,
		required: true
	}

})

const Diary = mongoose.model("Diary", diarySchema)

module.exports = Diary