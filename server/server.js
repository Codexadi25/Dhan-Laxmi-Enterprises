const express = require("express");
const engine = require('ejs-mate')
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",engine);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.redirect("/external/listings");
});



//Index Route
app.get("external/listings", async (req, res) => {
  res.render("listings/index.ejs", );
});

//New Route
app.get("external/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//Show Route
app.get("external/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

//Create Route
app.post("external/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

//Edit Route
app.get("external/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

//Update Route
app.put("external/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

//Delete Route
app.delete("external/listings/:id", async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My New Villa",
    description: "By the beach",
    price: 1200,
    location: "Calangute, Goa",
    country: "India",
  });

  await sampleListing.save();
  console.log("sample was saved");
  res.send("successful testing");
});

// NO Such Page 
app.get("*", (req, res) => {;
   res.render()
});


app.listen(8080, () => {
  console.log("server is listening to port 8080");
});