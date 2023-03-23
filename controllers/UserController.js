// import models dari models/UserModels.js
import User from "../models/UserModel.js";

// melakukan export dengan contrain getUser menggunakan asyncronus dengan 2 callback ( request, dan response )
// try mencoba response dari asyncronuse User.findAll();
// catch bila terjadi error maka pesan error akan ditampilkan pada console.log()
export const getUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// melakukan export untuk mencari user dari ID dengan menggunakan User.findone('{syntax db{property}}')
export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
