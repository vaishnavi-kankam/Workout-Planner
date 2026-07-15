const express = require("express");
const router = express.Router();

const { registerUser,loginUser} = require("../controllers/authController");
const authMiddleware = require ("../middleware/authmiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", authMiddleware,
    (req,res)=>{
        res.json({
            message: "Welcome! This is a protected route.",
            user: req.user,
        });
    });

module.exports = router;