const express = require("express");
const app = express();
const mongoose = require("mongoose");


const dbURI = "mongodb+srv://serverBotA:2VSefUSIrk5FlRTX@cluster0.tiu5lne.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const dbURI = "mongodb+srv://creedracer111:CBG7ewqYYP4KsGu2@cluster0.lbblfev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbURI);
}

app.get("/", (req, res) => {
  res.send("Server listelning well!");
  console.log("A request recieved.")
})

app.listen(8080, () => {
  console.log('Server Listening on PORT: 8080.');
})