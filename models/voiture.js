import mongoose from "mongoose";

const voitureSchema = mongoose.Schema ({
    matricule: String,
    description: {
        marque: String,
        couleur: String
    }
});


export default mongoose.model("Voiture", voitureSchema);