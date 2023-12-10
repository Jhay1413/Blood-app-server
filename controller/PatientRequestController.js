const router = require('express').Router();
const Request = require('../model/PatientRequest')


router.get('/getRequestById/:id',async (req,res)=>{
    try {
        const id = req.params.id
        console.log(id);
      const allRequestData = await Request.findOne({requestId:id});
      res.status(200).json(allRequestData)
    } catch (error) {
      console.log(error)
    }
  
  })
  module.exports = router