const Exercise = require('../models/Exercise');

const ExerciseController = () => {

  const addExercise = async ( req, res ) => {
    const { body } = req;

    try {
        const exercise = await Exercise.create({
            title: body.title,
            description: body.description,
            video: body.video,
            thumbnail: body.thumbnail,
            tips: body.tips,
            category: body.category,
            points: body.points,
        });

        return res.status(201).json({ exercise });
      } catch (err) {
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  const listExercises = async (req, res) => {

    try {
        const exercises = await Exercise.findAll()

        return res.status(200).json({ exercises });
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  const getExercisesCategory = async (req, res) => {
    const { params } = req;
    try {
        const exercises = await Exercise.findAll({ where: {category: params.categoryId }})

        return res.status(200).json({ exercises });
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  const getExercise = async (req, res) => {
    const { params } = req;

    if (params) {
      try {
        const ex = await Exercise
          .findOne({
            where: {
              id: params.exerciseId,
            },
          });

        if (!ex) {
          return res.status(400).json({ msg: 'Bad Request: Exercise not found' });
        }
        return res.status(200).json({ ex });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }
  };

  const getExeSchedule = async (req, res) => {
    const { body } = req;

      try {
        const exs = await Exercise
          .findAll({
            where: {
              id: body.ids,
            },
          });

        return res.status(200).json({ exs });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
  };

  return {
    addExercise,
    getExercise,
    listExercises,
    getExeSchedule,
    getExercisesCategory
  }
}

module.exports = ExerciseController