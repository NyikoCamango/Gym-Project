const Announcement = require('../models/Announcement');

const AnnouncementController = () => {

  const createAnnouncement = async ( req, res ) => {
    const { body } = req;

    try {
        const announcement = await Announcement.create({
            title: body.title,
            date: body.date,
        });

        return res.status(201).json({ announcement });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  const listAnnouncements = async (req, res) => {

    try {

        const events = await Announcement.findAll()

        return res.status(200).json({ events });
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  return {
    createAnnouncement,
    listAnnouncements,
  }
}

module.exports = AnnouncementController
