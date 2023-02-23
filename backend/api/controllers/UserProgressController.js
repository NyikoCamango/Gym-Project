const UserProgress = require('../models/UserProgress')

const UserProgressController = () => {
  
  const addProgress = async (req, res) => {
    const { body } = req;

    try {
      const userEvent = await UserProgress.create({
        TraineeId: body.TraineeId,
        day: body.day,
        points: body.points,
        exercise: body.exercise,
        totalWeight: body.totalWeight
      });

      const result = await UserProgress.findAll({ where: {TraineeId: userEvent.TraineeId, day: body.day}})
      return res.status(201).json({ userEvent: result });
    } catch (err) {
      // console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  const getProgress = async (req, res) => {
    const { params } = req;
    try {
        const userProgress = await UserProgress.findAll({ where: {TraineeId: params.TraineeId }})
        return res.status(200).json({ userProgress });
        
    } catch (err) {
        // console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  const getDayProgress = async (req, res) => {
    const { params } = req;
    try {
        const userProgress = await UserProgress.findAll({ where: {day: params.day, TraineeId: params.TraineeId }})
        return res.status(200).json({ userProgress });
        
    } catch (err) {
        // console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  return {
    addProgress,
    getProgress,
    getDayProgress
  }
}

module.exports = UserProgressController