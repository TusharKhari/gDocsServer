const e = require("express");
const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const authRouter = express.Router();

// authRouter.post("/api/signUp", async(req, res) => {
//     try {

//         const {
//             name, email, profilePic
//         } = req.body;
//         // email already exists
//      let user = await  User.findOne({ 
//        email
//        // email:email 
//     });

//      if(!user){
//         user = new User({
//             email:email,
//             profilePic:profilePic,
//             name:name
//             /**
//              email, profilePic,name
//              */
//         });
//         user = await user.save();
//      }
//    const token =  jwt.sign({id: user._id}, "@types/cors"); 

//         // store data
//         res.json({
//             user, token
//          //  user : user,
//         });
//     } catch (e) {
//         res.status(500).json({error: e.message});
//     }
// });//
//==========


authRouter.post("/api/signUp", async (req, res) => {
    try {
      const { name, email, profilePic } = req.body;
  
      let user = await User.findOne({ email });
  
      if (!user) {
        user = new User({
          email,
          profilePic,
          name,
        });
        user = await user.save();
      }
  
      const token = jwt.sign({ id: user._id }, "passwordKey");
  
      res.json({ user, token });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
// auth is a middleware
// authRouter.get("/" , auth, async (req, res)=>{
//     const user = await User.findById(req.user);
    
//     res.json({user, token : req.token});
//   //  console.log(req.user);
// });
authRouter.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({ user, token: req.token });
  });

module.exports = authRouter;