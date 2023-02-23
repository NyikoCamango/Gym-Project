const Trainer = require('../models/Trainer');
const User = require('../models/User');

const TrainerController = () => {

    const becomeTrainer = async (req,res) => {

    }

    const approveTrainer = async (req,res) => {
        const { body } = req;
        try {
            const trainer = await Trainer.create({
                email: body.email,
                password: body.password,
                role: body.role
              });
              const token = authService().issue({ id: user.id });
      
              return res.status(200).json({ token, user });
            
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: 'Internal server error' });
        }
    }

    return {
        becomeTrainer,
        approveTrainer
    }
}

module.exports = TrainerController