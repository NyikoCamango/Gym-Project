const Event = require("../models/Event");
const UserEvents = require("../models/UserEvents");

const EventController = () => {
  const createEvent = async (req, res) => {
    const { body } = req;

    try {
      const event = await Event.create({
        title: body.title,
        description: body.description,
        maxAttendees: body.maxAttendees,
        eventHost: body.eventHost,
        isPrivate: body.isPrivate,
        eventDate: body.eventDate,
        category: body.category,
        status: (body.status = "PENDING"),
      });

      return res.status(201).json({ event });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  const approveEvent = async (req, res) => {
    const { params } = req;
    try {
      const updatedEvent = await Event.update(
        { status: "COMING" },
        { where: { id: params.eventId } }
      );
      return res.status(200).json({ updatedEvent });
    } catch (error) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  const rejectEvent = async (req, res) => {
    const { params } = req;
    try {
      const updatedEvent = await Event.update(
        { status: "REJECTED" },
        { where: { id: params.eventId } }
      );
      return res.status(200).json({ updatedEvent });
    } catch (error) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  const attendEvent = async (req, res) => {
    const { body } = req;
    try {
      const attending = await UserEvents.create({
        UserId: body.userId,
        EventId: body.eventId,
        status: body.status ?? "ATTENDING",
      });
      return res.status(200).json({ attending });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

    const getTrainerEvents = async (req, res) => {

        const {params} = req

        try {

            const events = await Event.findAll({
                where: {
                    eventHost: params.trainerId
                }
            })

            return res.status(200).json({ events });
            
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }

    const getPendingEvents = async (req, res) => {

        try {

            const events = await Event.findAll({
                where: {
                    status: "PENDING"
                }
            })

            return res.status(200).json({ events });
            
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }

    const listEvents = async (req, res) => {

        try {

            const events = await Event.findAll({
                where: {
                    status: 'COMING'
                }
            })

            return res.status(200).json({ events });
            
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }
    

    return {
        listEvents,
        createEvent,
        approveEvent,
        rejectEvent,
        attendEvent,
        getTrainerEvents,
        getPendingEvents
    }

}

module.exports = EventController