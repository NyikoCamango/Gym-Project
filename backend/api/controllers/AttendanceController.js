
const attendanceTable = require("../models/Attendance");

const AttendanceController = () => {
    const attend = async (req, res) => {
        const { body } = req;
        try {
            const attending = await attendanceTable.create({
                name: body.name,
                surname: body.surname,
                timein: body.timein,
                timeout: body.timeout,
                status: body.status ?? 'OUT'
            })
            return res.status(200).json({ attending });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }
  const getMembers = async (_, res) => {
    try {
      const members = await attendanceTable.findAll({ where: { status: "GYIMING" } });
      return res.status(200).json({ members });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };
  return {
    attend,

    getMembers,
  };
};
module.exports = AttendanceController;
