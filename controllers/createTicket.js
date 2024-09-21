// import the model
const Ticket = require('../models/Ticket');

//define the controller functions
exports.createTicket = async (req, res) => {
    try {
        const { title, description } = req.body;

        if(!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description fields are required"
            });
        }
        const ticket = await Ticket.create({ title, description });

        if(!ticket) {
            return res.status(400).json({
                success: false,
                message: "Failed creating ticket"
            });
        }

        res.status(201).json({
            success: true,
            data: ticket,
            message: "Ticket created successfully",
        });
    } catch (error) {
        console.error("Failed creating tickets", error.message);
        res.status(500).json({
            success: false,
            message: "Failed creating tickets"
        })
    }
}