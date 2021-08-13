const mongoose = require ("mongoose")

const estudioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, //acessar id gerado automaticamente
    nome: {
        type:String,
        required: true
    },
    criadoEm: {
        type:Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model("estudio", estudioSchema)