const router = require('express').Router();
const Request = require('../model/PatientRequest')


router.get('/getRequestById/:id',async (req,res)=>{
    try {
        const id = req.params.id
      const allRequestData = await Request.findById(id);
      res.status(200).json(allRequestData)
    } catch (error) {
      console.log(error)
    }
  
  })
  module.exports = router