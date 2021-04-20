const express = require('express');

class Server{
    
    constructor(  ){
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas De La Aplicacion
        this.routes();

        
    }

    middlewares(){
        // Directorio publico
        this.app.use(express.static('public'));

    }

    routes(){

        this.app.get('/inicio',  (req, res) => {

            res.json({
                msg:'get API',
            });
        
        });
        this.app.put('/inicio',  (req, res) => {

            res.json({
                msg:'put API',
            });
        
        });
        this.app.post('/inicio',  (req, res) => {

            res.json({
                msg:'post API',
            });
        
        });
        this.app.delete('/inicio',  (req, res) => {

            res.json({
                msg:'delete API',
            });
        
        });
    }

    listener(){

        this.app.listen(this.port,()=>{
            console.log('Corriendo en el puerto',this.port);
        })
    }
}

module.exports = Server;