const express = require('express');
const cors=require("cors");

class Server{
    constructor(){

        this.app= express();
        this.port=process.env.PORT;
        this.usuariosPath="/api/usuarios";

        //middleware 
        this.middlewares();

//Rutas
this.routes()

    }

//middlewares

middlewares(){

// cors
this.app.use(cors());

//lectura y parseo del body

this.app.use(express.json())



   //directorio publico
   this.app.use(express.static("public"))
}

//RUTAS

routes(){
    this.app.use(this.usuariosPath, require("../routes/usuarios"))

//   this.app.get('/api', (req, res) => {
//         res.json({
//           msg:'bkienvenido modulo 4!',
//         });
//       });
      
//       this.app.post('/api', (req, res) => {
//         res.status().json({
//           msg:'Post - info creda',
//         });
//       });

//       this.app.put('/api', (req, res) => {
//         res.json({
//           msg:'PUT, INFO ACTUALIZADA',
//         });
//       });

//       this.app.delete('/api', (req, res) => {
//         res.json({
//           msg:'DELETE, info eliminada',
//         });
//       });
}

listen(){

    this.app.listen(this.port, () => {
        console.log(`Escuchando en el puerto ${this.port}`);
      });

}
}
module.exports=Server