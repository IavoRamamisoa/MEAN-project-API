import mongoose from "mongoose";

const depenseSchema = mongoose.Schema ({
    salaire:Number,
    loyer: Number,
    achatPiece:Number,
    AutreDepense:Number
    
});


export default mongoose.model("Depense", depenseSchema);