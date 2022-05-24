const {response, request}=require ("express");

const usuariosGet= (req=request, res=response) => {
  const query=req.query;
  const {nombre="no name", apikey,limit=5}=req.query


 
    res.json({
      msg:'bkienvenido modulo 4!',
      nombre, apikey, limit
    });
  };


  const usuarioPost= (req, res) => {
const datos=req.body

    res.json({
      msg:'Post - info creda',
      datos,
    });
  };


  const usuariosPut=(req, res) => {
      const id=req.params.id

    res.json({
      msg:'PUT, INFO ACTUALIZADA',
      id,
    });
  };


  const usuariosDelete=(req, res) => {
    const id=req.params.id
    res.json({
      msg:'DELETE, info eliminada',
      id, 
    });
  };


  module.exports={
      usuariosGet,
      usuarioPost,
      usuariosPut,
      usuariosDelete,

  }

