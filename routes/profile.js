const express			= require("express")
const router			= express.Router()
const profileController = require("./../controllers/profileController")


router.get("/", profileController.getProfile)
router.post("/create", profileController.createProfile)

module.exports = router