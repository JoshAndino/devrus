const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = 3606

// const event = require('./models/event');
// const networking = require('./models/networking');

const db = require("./models");

app.use(express.static(path.join(__dirname, "public")));

// event.create({
//     name: 'testing'
// }).then(event =>{
//     event.createNetworking({
//         name: 'testing',
//         type:'meet up'
//     }).then(()=> console.log('worked'))
// })

// event.findAll({
//     include:[networking]
// }).then(event =>{
//     console.log(event[0].networking);
// })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
app.get("/", async (req, res) => {
  try {
    const event = await db.event.findAll({});
    const networking = await db.networking.findAll({});
    res.render("index", { event: event, networking: networking });
  } catch (err) {
    console.log(err);
  }

  //   db.event
  //     .findAll({
  //       // include: [networking]
  //     })
  //     .then(event => {
  //       db.networking.findAll({}).then(networking => {
  //         res.render("index", { event: event, networking: networking });
  //       }).catch(err => console.log(err));
  //     }).catch(err => console.log(err));
});

app.post("/devrus/models/events", (req, res) => {
  db.event.create(req.body).then(() => res.redirect("/"));
});

app.post("/devrus/models/networking/", (req, res) => {
  db.networking.create(req.body).then(() => res.redirect("/"));
});

// app.delete("/devrus/models/networking",(req,res)=>{
//   module.event.findbyPK(req.body).then(event =>{
//     event.destroy();
//     res.redirect("/")
//   })
// })

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
