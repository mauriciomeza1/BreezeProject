const res = require("express/lib/response")
const { json } = require("express/lib/response")
const Diary			= require("./../models/Diary")

/*
exports.diary = async (req, res) => {

	const allDiaries = await Diary.find({}).populate("title")

	res.render("diaries/all", {
		diaries: allDiaries
	})

}*/



exports.getDiaries = async (req, res) => {

	const allDiaries = await Diary.find({})

	res.json({
		msg: "Se ha obtenido con éxito el listado de mascotas",
		data: allDiaries
	})

}

exports.createDiaries = async (req, res) => {
	
	// FORMULARIO
	const { markdown, mood } = req.body

	const newDiary	= await Diary.create({markdown, mood})

	res.json({
		msg: "Se ha creado una mascota correctamente",
		data: newDiary
	})
	
}





/*
exports.newDiaryForm = async (req, res) => {

	const { markdown, mood} = req.body

	console.log(req.body)


	const newDiary = await Diary.create({ markdown, mood})

	console.log(newDiary)

	res.redirect("/diaries/all")

}

exports.getSingleDiary = async (req, res) => {

	try {

		const { id } = req.params
		const singleDiary = await Diary.findById(id)
		return res.render("diaries/details", {
			singleDiary
		})


	} catch (error) {
		
		console.log(error)
		return res.render(`/diaries`, {
			errorMsg: "Hubo un problema en la muestra de los detalles."
		})

	}
}


exports.deleteDiary = async (req, res) => {

	const { id } = req.params

	try {
		const deletedDiary = await Diary.findByIdAndRemove(id)
		res.redirect("/diaries/all")

	} catch (error) {
		console.log(error)
		res.render(`diaries/${id}`)

	}
}



exports.editDiary = async (req, res) => {

	const { id } = req.params

	const singleDiary = await Diary.findById(id)

	res.render("diaries/edit", {
		singleDiary
	})


}


exports.editDiaryForm = async (req, res) => {

	const { markdown, mood } = req.body

	const { id } = req.params

	await Diary.findByIdAndUpdate(
		id,
		{ markdown, mood },
		{ new: true }
	)

	res.redirect(`/diaries/${id}`)


}*/