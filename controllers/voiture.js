import Voiture from "../models/voiture.js";

export const getVoiture = async (req, res) => {

    try {
        const voiture = await Voiture.find();

        res.status(200).json(voiture);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createVoiture = async (req,res) => {
    const voiture = req.body;
    const newPost = new Voiture ({...voiture,idProprietaire:req.userId});
    console.log(req.userId);

    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}