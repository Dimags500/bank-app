import { User } from "../models/User.models.js";

const getUserById = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findById(userID);
    if (!user) {
      throw new Error("user not exist in collection ");
    }
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const userBody = req.body;
    console.log(userBody);

    const newUser = new User(userBody);
    const savedUser = await newUser.save();
    res.status(200).send(savedUser);
  } catch (error) {
    console.log(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const userBody = req.body;
    const user = await User.findByIdAndUpdate({ _id: userID }, userBody, {
      new: true,
    });
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findByIdAndDelete({ _id: userID });

    res.status(200).send({ data: user });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};

export { getUserById, getAllUsers, updateUserById, deleteUserById, createUser };
