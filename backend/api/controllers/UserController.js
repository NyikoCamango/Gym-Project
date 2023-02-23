const User = require("../models/User");
const authService = require("../services/auth.service");
const bcryptService = require("../services/bcrypt.service");

const UserController = () => {
  const register = async (req, res) => {
    const { body } = req;

    if (body.password === body.confirm) {
      try {
        const user = await User.create({
          email: body.email,
          password: body.password,
          surname: body.surname,
          name: body.fname,
          role: body.role,
        });
        const token = authService().issue({ id: user.id });

        return res.status(200).json({ token, user });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Internal server error" });
      }
    }

    return res.status(400).json({ msg: "Bad Request: Passwords don't match" });
  };

  const login = async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      try {
        const user = await User.findOne({
          where: {
            email,
          },
        });

        if (!user) {
          return res.status(400).json({ msg: "Bad Request: User not found" });
        }

        console.log({ user });

        // if (bcryptService().comparePassword(password, user.password)) {
        //   const token = authService().issue({ id: user.id });

        return res.status(200).json({ user });
        // return res.status(200).json({ token, user });
        // }

        return res.status(401).json({ msg: "Unauthorized" });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Internal server error" });
      }
    }

    return res
      .status(400)
      .json({ msg: "Bad Request: Email or password is wrong" });
  };

  const validate = (req, res) => {
    const { token } = req.body;

    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: "Invalid Token!" });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  const makeTrainer = async (req, res) => {
    const { body } = req;
    try {
      const updatedEvent = await User.update(
        { role: "TRAINER" },
        { where: { id: body.userId } }
      );
      return res.status(200).json({ updatedEvent });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  const getMembers = async (_, res) => {
    try {
      const members = await User.findAll({ where: { role: "USER" } });
      return res.status(200).json({ members });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  const getTrainers = async (_, res) => {
    try {
      const trainers = await User.findAll({ where: { role: "TRAINER" } });
      return res.status(200).json({ trainers });
    } catch (error) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };
  const getUser = async (req, res) => {
    const { params } = req;
    try {
      const userEvents = await User.findAll({
        where: { UserId: params.UserId },
      });
      return res.status(200).json({ userEvents });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  return {
    register,
    login,
    validate,
    getMembers,
    makeTrainer,
    getUser,
    getTrainers,
  };
};

module.exports = UserController;
