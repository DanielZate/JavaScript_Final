import  mongoose  from "mongoose";

const Schema = mongoose.Schema


const VideoJuegoSchema = new Schema({
    nombre:{
        type: String,
        required: 'Nombre vacio'
    },
    Desarrollador:{
        type: String,
        required: 'Desarrollador vacio'
    },
    Genero:{
        type: String,
        required: 'Genero vacio'
    },
    Serie:{
        type: String
    },
    fecha_esterno:{
        type: Date
    },

})

export default VideoJuegoSchema   