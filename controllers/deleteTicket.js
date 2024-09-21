// import the model
const Ticket = require('../models/Ticket');

//define the controller functions
exports.deleteTicket = async (req, res) => {
    try {
        const { ticketId } = req.params;

        if (!ticketId) {
            return res.status(400).json({
                success: false,
                message: "Ticket ID is required"
            });
        }

        const ticket = await Ticket.findByIdAndDelete(ticketId);

        if (!ticket) {
            return res.status(400).json({
                success: false,
                message: "Ticket not found"
            });
        }

        res.status(200).json({
            success: true,
            data: ticket,
            message: "Ticket deleted successfully",
        });

    } catch (error) {
        console.error("Failed deleting tickets", error.message);
        res.status(500).json({
            success: false,
            message: "Failed deleting tickets"
        })
    }
}