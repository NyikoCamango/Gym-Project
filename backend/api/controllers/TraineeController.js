const Trainee = require('../models/Trainee');

const TraineeController = () => {

  const addTrainee = async ( req, res ) => {
    const { body } = req;

    try {
      const trainee = await Trainee.create({
          type: body.type,
          names: body.names,
          bmi: body.bmi,
          height: body.height,
          focus: body.focus,
          weight: body.weight,
          points: body.points,
          streak: body.streak,
          level: body.level,
          goal: body.goal,
          goalStart: body.goalStart,
          UserId: body.UserId,
          trainer: body.trainer,
          profileImg: body.profileImg,
          duration: body.duration

      });

      return res.status(201).json({ trainee });
    } catch (err) {
      return res.status(500).json({ msg: 'Internal server error ' , err});
    }
  }

  const listTrainees = async (req, res) => {

    try {
        const trainees = await Trainee.findAll()

        return res.status(200).json({ trainees });
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  const getTraineesByTrainerId = async (req, res) => {
    const { params } = req;
    try {
        const trainees = await Trainee.findAll({ where: {trainer: params.trainerId }})

        return res.status(200).json({ trainees });
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  const getTrainee = async (req, res) => {
    const { params } = req;

    if (params?.traineeId) {
      try {
        const trainee = await Trainee
          .findOne({
            where: {
              UserId: params.traineeId,
            },
          });

        if (!trainee) {
          return res.status(400).json({ msg: 'Bad Request: Trainee not found' });
        }
        return res.status(200).json({ trainee });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

  };

  const updateTrainee = async (req, res) => {
    const { body, params } = req;

    console.log('HEREEE  ', req)

      try {
        await Trainee.update({...body}, {
            where: {
              id: params.id,
            },
          });

        return res.status(204).json({ status: res.json()});
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  }

  return {
    addTrainee,
    getTrainee,
    listTrainees,
    updateTrainee,
    getTraineesByTrainerId,
  }
}

module.exports = TraineeController