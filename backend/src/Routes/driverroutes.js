const express = require("express")
const driver = express.Router()
const { driverprofile, findprofile ,loadreturn, availableload,availableBooking, BackendRun} = require("../Controllers/drivecontroller")

driver.post("/profile", driverprofile)
driver.post("/find", findprofile)
driver.post("/returnload",loadreturn)
driver.post("/availableload",availableload)
driver.post("/booking",availableBooking)
driver.get("/backendtest",BackendRun)



module.exports = driver
