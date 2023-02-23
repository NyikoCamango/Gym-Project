const WorkoutProgress = require('../models/WorkoutProgress');

const WorkoutController = () => {

    const addProgress = async ( req, res ) => {
        const { body } = req;

        try {
            const event = await WorkoutProgress.create({
               UserId: body.userId,
               type: body.type,
               points: body.points
            });
    
            return res.status(201).json({ event });
          } catch (err) {
            // console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }


    const getUserProgress = async(req, res) => {

        
        const {params} = req
        // console.log(params.Id, 'llll')

        try {

            const progress = await WorkoutProgress.findAll({
                where: {
                    UserId: params.Id
                }
            })

            return res.status(200).json({ progress });
            
        } catch (err) {
            // console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }
    
    return {addProgress, getUserProgress}

}

module.exports = WorkoutController