import mongoose  from "mongoose";
import VideoJuegoSchema from "../modelos/VideoJuegoModel.js";


const VideoJuego = mongoose.model('VideoJuegos', VideoJuegoSchema)



export const addVideoJuego = (request, response)=>{
    //nuevo objeto basado en el DAO
    let nuevoVideoJuego = new VideoJuego( request.body )
    
    nuevoVideoJuego.save((error, VideoJuego)=>{
        if(error){
            response.send(`Error detectado: ${error}`)
        }else{
            response.json(VideoJuego)
        }
    })
}

export const getVideoJuego=(request, response)=>{
    VideoJuego.find( {}, (error , VideoJuego)=>{
        if(error){
            response.send(error)
        }else{
            response.json(VideoJuego)
        }
    })
}


export const getVideoJuegoById = (request , response)=>{
    VideoJuego.findById(request.params.VideoJuegoid , (error , c)=>{
        if(error){
            response.send(error)
        }else{
            response.json(c)
        }
    })
}

export const deleteVideoJuego = (request , response)=>{
    VideoJuego.deleteOne ({ _id: request.params.VideoJuegoid}, (error, VideoJuego_borrado)=>{
        if(error){
            response.send(error)
        }else{
            response.json({"mensaje": "borrado exitoso"})
        }
    })
}

export const updateVideoJuego = (request , response)=>{
    VideoJuego.findOneAndUpdate({ _id: request.params.VideoJuegoid}
                                , request.body
                                , {
                                    new:true
                                }
                                , (error , VideoJuego_actualizado)=>{
                                    if(error){response.save(error)}
                                    else{response.json(VideoJuego_actualizado)}
                                } )
}