// 1. IMPORTACIONES
const express			= require("express")
const router			= express.Router()
const diaryController = require("./../controllers/diaryController")


// 2. ROUTER



//router.get ("/all", diaryController.diary)
//router.get("/new", diaryController.newDiary)
router.post("/create", diaryController.createDiaries)
router.get("/", diaryController.getDiaries)
//router.get("/", diaryController.getDiaries)

//router.get("/:id", diaryController.getSingleDiary)

//router.post("/:id/delete", diaryController.deleteDiary)
                
//router.get("/:id/edit", diaryController.editDiary)

//router.post("/:id/edit", diaryController.editDiaryForm)

// 3. EXPORTACIÓN
module.exports = router