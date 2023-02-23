const ComplaintTable = require("../models/Complaint");

const ComplaintsController = () => {
  const newComplaint = async (req, res) => {
    const { body } = req;
    try {
      const attending = await ComplaintTable.create({
        name: body.name,

        status: body.status,
      });
      return res.status(200).json({ attending });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };
  const getComplaints = async (_, res) => {
    try {
      const members = await attendanceTable.findAll();
      return res.status(200).json({ members });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };
  return {
    newComplaint,
    getComplaints,
  };
};
module.exports = ComplaintsController;
