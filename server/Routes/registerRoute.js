const userModal = require("../Modals/userModal")
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const salt=10

const router = express.Router()


router.post("/Register", async (req, res) => {
    const Email= await userModal.find({Email:req.body.Email})
    if(Email.length){
        res.status(400).send("EmailExist")
     }
    else{       
             bcrypt.genSalt(salt,(salterr,saltval)=>{
             if(!salterr){
                  bcrypt.hash(req.body.Password,saltval,(hasherr,hasval)=>{
                  if(!hasherr){
                      userModal.create({
                          Name:req.body.Name,
                          Email:req.body.Email,
                          Password:hasval,
                          })
                          res.status(200).send('successfully created')
                    }
                     else {
                       res.status(400).send("hasherr")
                     }
                  })
                }else
                  {
                  res.status(400).send("salterr")
                  }
    })
}
});
router.post("/userlogin", (req, res)=> {
    userModal.find({Email: req.body.Email}).then((userData)=> {
        console.log(userData)
        if(userData.length) {
            bcrypt.compare(req.body.Password, userData[0].Password).then((val)=> {
                if(val) {
                    const authToken = jwt.sign(userData[0].Email, process.env.SECRET_KEY);
                    res.status(200).send({authToken});
                } else {
                    res.status(400).send("Invalid Password");
                }
            })
        }else{
            res.status(400).send("User Not Exist")
        }
    })
});


router.get("/user",(req,res)=>{
    try {
      const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY );
      userModal.find({Email : user}).then((data)=>{
        res.status(200).send({user: data});
      }).catch((err)=>{
        res.status(400).send(err);
      })
  } catch(err) {
      res.status(400).send("Unauthorize user", err)
  }  

  })


module.exports = router