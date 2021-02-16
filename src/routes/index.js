const { Router } = require("express");
const authRoutes = require("./authRoutes");
const bankDetailRoutes = require("./bankDetailRoutes");
const userRoutes = require("./userRoutes");
const requestRoutes = require("./requestRoutes");

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/bank-details", bankDetailRoutes);
router.use("/requests", requestRoutes);
router.post("/secure", (req, res) => {
  console.log(req.body);
  // const authHeader = req.header['authorization'];
  // // const authHeader = req.query().token;
  // console.log(authHeader)
  return res.send({
    auth: "hahaha"
  });
});


module.exports = router;
