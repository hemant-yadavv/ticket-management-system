const express = require("express")
const router = express.Router()

const {createTicket} = require("../controllers/createTicket")
const {getAllTickets, getTicket} = require("../controllers/getTicket")
const {updateTicket} = require("../controllers/updateTicket")
const {deleteTicket} = require("../controllers/deleteTicket")


router.post("/createTicket", createTicket);
router.get("/getTicket", getAllTickets);
router.get("/getTicket/:ticketId", getTicket);
router.put("/updateTicket/:ticketId", updateTicket);
router.delete("/deleteTicket/:ticketId", deleteTicket);


module.exports = router;