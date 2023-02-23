const AttendenceGym = require("../models/AttendenceGym");
const moment = require('moment')

const AttendenceGymController = () => {

  const attend = async (req, res) => {
    const { body } = req;
    try {
      const attending = await AttendenceGym.create({
        traineeId: body.traineeId,
      });
      return res.status(200).json({ attending });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  const getCapacity = async (_, res) => {
    try {
      const members = await AttendenceGym.count();
      const cap = (members/300).toFixed(2)

      return res.status(200).json({ cap });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };
  
  return {
    attend,
    getCapacity
  };
};
module.exports = AttendenceGymController;
