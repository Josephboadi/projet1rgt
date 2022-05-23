const axios = require("axios");
const asyncHandler = require("express-async-handler");
const sgMail = require("@sendgrid/mail");
const Users = require("../models/Users");

const newUserData = asyncHandler(async (user, req, res) => {
  const newUser = new Users({
    name: user.name,
    email: user.email,
    imageURL: user.picture,
    email_verified: user.email_verified,
    auth_time: user.updated_at,
  });

  try {
    const savedUser = await newUser.save();
    req.user = savedUser;

    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // const msg = {
    //   to: savedUser.email,
    //   from: "joseph@reallygreattech.com", 
    //   subject: "Logged In",
    //   text: "You just logged in",
    //   html: "<strong>Test body</strong>",
    // };
    // await sgMail.send(msg);
    res.status(200).send({ user: savedUser });
  } catch (res) {
    return res.status(500).json({ success: false, message: error });
  }
});

exports.userLogin = asyncHandler(async (req, res) => {
  const { user } = req.body;

  try {
    // Check if User Exist or Not
    const userDetail = await Users.findOne({ email: user.email });
    if (!userDetail) {
      newUserData(user, req, res);
    } else {
      // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      // const msg = {
      //   to: userDetail.email,
      //   from: "joseph@reallygreattech.com",
      //   subject: "Logged In",
      //   text: "You just logged in",
      //   html: "<strong>Test body</strong>",
      // };
      // await sgMail.send(msg);
      
      res.send({ user: userDetail });

      
    }
  } catch (error) {
    return res.status(500).send({ success: false, message: error });
  }
});
