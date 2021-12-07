//construccion de 
//endpoint: ruta en un proyecto REST orientado a servicios
//          responder como mensajes en fomrato JSON
    
import {addVideoJuego,  getVideoJuego, getVideoJuegoById, deleteVideoJuego, updateVideoJuego } from "../controladores/VideoJuegoController.js";



const rutas = function(app){
    app.route('/VideoJuego')
                .get( getVideoJuego )
                .post( addVideoJuego )
    app.route('/VideoJuego/:VideoJuegoid')
                .get( getVideoJuegoById )
                .put( updateVideoJuego )
                .delete( deleteVideoJuego )
            }
export default rutas;
