const UserGymSchedule = require('../models/UserGymSchedule');
const Exercise = require('../models/Exercise');

const UserScheduleController = () => {

    const bulkAddUserSchedule = async ( req, res ) => {
        const { body } = req;

        try {
            const schedules = await UserGymSchedule.bulkCreate(body);
    
            return res.status(201).json({ schedules });
          } catch (err) {
            // console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }

    const addUserSchedule = async ( req, res ) => {
        const { body } = req;

        try {
            const schedule = await UserGymSchedule.create({
            TraineeId: body.userId,
            title:body.title,
            description: body.description,
            done: false,
            day: body.day,
            schedule: body.schedule,
            duration: body.duration,
            tools: body.tools,
            type: body.type,
            });
    
            return res.status(201).json({ schedule });
          } catch (err) {
            // console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }

    const getUserSchedule = async(req, res) => {

        const {params} = req

        try {

            const schedule = await UserGymSchedule.findAll({
                where: {
                    TraineeId: params.traineeId
                }
            })
            return res.status(200).json({ schedule });
            
        } catch (err) {
            // console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }


    const getDayWorkOuts = async (req, res) => {
        const { body } = req;
        let ids = body.ids
        ids = ids.replace('[', '').replace(']','')
        let idss = ids.split(',')

        const exercises = await Exercise.findAll({
            where: {
                id: idss
            }
        })
        return res.status(200).json({ exercises });
    }
    
    return { getUserSchedule, addUserSchedule, getDayWorkOuts, bulkAddUserSchedule}

}

module.exports = UserScheduleController