const UserEvents = require('../models/UserEvents');

const UserEventsController = () => {

  const attendEvent = async ( req, res ) => {
    const { body } = req;

    try {
        const userEvent = await UserEvents.create({
          UserId: body.UserId,
          EventId: body.EventId
        });

        return res.status(201).json({ userEvent });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  const getMyEvents = async (req, res) => {
    const { params } = req;
    try {
        const userEvents = await UserEvents.findAll({ where: {UserId: params.UserId }})
        return res.status(200).json({ userEvents });
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  return {
    getMyEvents,
    attendEvent
  }
}

module.exports = UserEventsController