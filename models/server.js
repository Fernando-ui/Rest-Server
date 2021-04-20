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

            res.send('Hello World');
        
        });
    }

    listener(){

        this.app.listen(this.port,()=>{
            console.log('Corriendo en el puerto',this.port);
        })
    }
}

module.exports = Server;