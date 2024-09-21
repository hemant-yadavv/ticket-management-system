// import model
const Ticket = require('../models/Ticket');

//define the controller functions
exports.updateTicket = async (req, res) => {
    try {
        const { ticketId } = req.params;
        if (!ticketId) {
            return res.status(400).json({
                success: false,
                message: "Ticket ID is required"
            });
        }

        const { title, description, status } = req.body;

        const ticket = await Ticket.findById(ticketId);

        if (!ticket) {
            return res.status(400).json({
                success: false,
                message: "Ticket not found"
            });
        }

        ticket.title = title || ticket.title;
        ticket.description = description || ticket.description;
        ticket.status = status || ticket.status;

        await ticket.save({ validateBeforeSave: true });

        res.status(200).json({
            success: true,
            data: ticket,
            message: "Ticket updated successfully",
        });


    } catch (error) {
        console.error("Failed updating tickets", error.message);
        res.status(500).json({
            success: false,
            message: "Failed updating tickets",
            error: error.message
        })
    }
}