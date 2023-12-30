const validate = (schema) =>async(req,res,next)=>{
    try {
        const parsebody = await schema.parseAsync(req.body);
        req.body = parsebody;
        next();
    } catch (error) {
        res.status(400).json({msg :error});
    }
};

module.exports = validate;