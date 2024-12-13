import nodemailer from "nodemailer"



// var mailOptions ={
//   from:'---from---@gmail.com',
//   to:'----to----@gmail.com',
//   subject:"Sending Email to Rajat",
//   text:"Welcome to NodeMailer, It's Working",
//   html: '<h1>Welcome</h1><p>That was easy!</p>',
//   attachments: [
//       { filename: 'txt.txt', path: './txt.txt' }
//    ]
// } 

const mailOptions ={
  from:'gyaneswarrout12345@gmail.com',
  to:'gyaneswarrout1190@gmail.com',
  subject:"this is a Test mail",
  text:"Welcome to NodeMailer, It's Working",
  html: '<h1>Welcome</h1><p>That was easy!</p>',
}  


const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true, 
    port: 465,
    auth: {
      user: "gyaneswarrout12345@gmail.com",
      pass: "drsyjbhpghjbuntw",
    },
  });

  transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log("You fucked "+error);
    }else{
        console.log('Email Send ' + info.response);
    }
});

