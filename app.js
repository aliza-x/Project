const express = require("express");
const mongoose = require("mongoose");
const routerr = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const DB =
  "mongodb+srv://aliza1:aliza10@cluster0.swz2d9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
app.use(express.json());
app.use("/api/products", routerr);
app.use("/api/users", userRouter);

mongoose.connect(DB).then(() => {
  console.log("DB connected");
});

const port = 6574;
app.listen(port, () => {
  console.log("app running");
});
