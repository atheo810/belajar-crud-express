// import models dari models/UserModels.js
import { response } from "express";
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

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ message: "User telah dibuat" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "User telah di update" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "User telah dihapus" });
  } catch (error) {
    console.log(error.message);
  }
};
