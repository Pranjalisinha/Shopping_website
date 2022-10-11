const orderModal = require('../Modals/orderModal');
const express = require("express")
const jwt = require("jsonwebtoken");


const router = express.Router()


router.post("/addOrder", async (req, res) => {
   
    
    const user = await jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
            orderModal.create({
                Order: req.body.Order,
                Email: user,
                Payment: req.body.Payment,
                
            }).then(() => {
                    res.status(200).send(`order added successfully`);
                }).catch((err) => {
                    res.status(400).send(err.message)
                })
        
    

});

router.get("/all_order", (req, res)=> {
    const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
    orderModal.find({Email: user}).then((userData)=> {
        if(userData.length) {
            res.status(200).send(userData[0].Order)
        }else{
            res.status(400).send("No orders")
        }
    })
});



module.exports = router