const res = require("express/lib/response")
const { json } = require("express/lib/response")
const Profile			= require("./../models/Profile")



exports.getProfile = async (req, res) => {

	const theProfile = await Profile.find({})

	res.json({
		msg: "Se ha obtenido con éxito el perfil",
		data: theProfile
	})
}

exports.createProfile = async (req, res) => {
	
	// FORMULARIO
	const { 
        age,
        pronouns,
        description,
        about,
        problems,
        needs,
        goals
     } = req.body

	const newProfile	= await Profile.create({
        age,
        pronouns,
        description,
        about,
        problems,
        needs,
        goals
    })

	res.json({
		msg: "Se ha creado un perfil correctamente",
		data: newProfile
	})
	
}
