const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const authRouter = require("./routes/auth");
const documentRouter = require("./routes/document");


const PORT = process.env.PORT | 3001;

const app = express();


app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(documentRouter);

 const DB = "mongodb+srv://gDocs:GDocs123@cluster0.nzhndus.mongodb.net/?retryWrites=true&w=majority";


 mongoose.connect(DB).then(()=>{
    console.log("Connection Successful")
}).catch((e)=>{
    console.log(e);
});

app.listen(PORT, "0.0.0.0", ()=>{
  //  console.log("connected at port  " + PORT)
    console.log(`connected at port ${PORT}`);
});
 
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const http = require("http");
// const authRouter = require("./routes/auth");


// const PORT = process.env.PORT | 3001;

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use(authRouter);

// const DB =
// "mongodb+srv://gDocs:GDocs123@cluster0.nzhndus.mongodb.net/?retryWrites=true&w=majority";

// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log("Connection successful!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// server.listen(PORT, "0.0.0.0", () => {
//   console.log(`connected at port ${PORT}`);
// });