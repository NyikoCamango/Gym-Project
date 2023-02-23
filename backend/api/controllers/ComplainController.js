const Complain = require('../models/Complain');

const ComplainController = () => {

  const createComplain = async ( req, res ) => {
    const { body } = req;

    try {
        const complain = await Complain.create({
            title: body.title,
        });

        return res.status(201).json({ complain });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  const listComplain = async (req, res) => {

    try {

        const complains = await Complain.findAll()

        return res.status(200).json({ complains });
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  return {
    createComplain,
    listComplain,
  }
}

module.exports = ComplainController