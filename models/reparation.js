import mongoose from "mongoose";

const reparationSchema = mongoose.Schema ({
    idVoiture:String,
    dateReception:Date,
    aFaire: [{
        description: String,
        avancement: String,
        statut:Boolean,
        dateDebut:Date,
        dateFin:Date,
        dureeExact:Number
    }],
    bonSortie: Boolean
});


export default mongoose.model("Reparation", reparationSchema);