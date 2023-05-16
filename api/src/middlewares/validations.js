const validate = (req, res, next) =>{
    const {name, id} =req.body ;
    if (!name || !id)
    res.status(400).json({error: "necesita completar todos los campos"});

    next();
}

module.exports= validate;