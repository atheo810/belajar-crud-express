// import models dari models/UserModels.js
import User from "../models/UserModels";

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
