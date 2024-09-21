// import the model
const Ticket = require('../models/Ticket');

//define the controller functions for getting all tickets
exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();

        if (!tickets) {
            return res.status(400).json({
                success: false,
                message: "Failed getting tickets"
            });
        }

        res.status(200).json({
            success: true,
            length: tickets.length,
            data: tickets,
            message: "Tickets retrieved successfully",
        });

    } catch (error) {
        console.error("Failed getting tickets", error.message);
        res.status(500).json({
            success: false,
            message: "Failed getting tickets"
        })
    }
}

//define the controller functions for getting a single ticket by id

exports.getTicket = async (req, res) => {
    try {
        const {ticketId} = req.params;

        if(!ticketId) {
            return res.status(400).json({
                success: false,
                message: "Ticket ID is required"
            });
        }

        const ticket = await Ticket.findById(ticketId);

        if (!ticket) {
            return res.status(400).json({
                success: false,
                message: "Failed getting ticket"
            });
        }

        res.status(200).json({
            success: true,
            data: ticket,
            message: "Ticket retrieved successfully",
        });


    } catch (error) {
        console.error("Failed getting ticket", error.message);
        res.status(500).json({
            success: false,
            message: "Failed getting ticket"
        })
    }
}


