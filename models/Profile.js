const mongoose = require("mongoose")

const ProfileSchema = mongoose.Schema({

	age: {
		type: String
	},
	pronouns: {
		type: String
	},
	description: {
		type: String
	},
	about: {
		type: String
	},
	problems: {
		type: String
	},
	needs: {
		type: String
	},
	goals: {
		type: String
	},

})

const Profile = mongoose.model("Profile", ProfileSchema)

module.exports = Profile