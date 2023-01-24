import Cout from "../models/cout.js";
import mongoose from "mongoose";

export const getCout = async (req, res) => {

    try {
        const cout = await Cout.find();

        res.status(200).json(cout);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCout = async (req,res) => {
    const cout = req.body;
    const newPost = new Cout (cout);
    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}