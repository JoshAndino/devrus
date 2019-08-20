# devrus

DevR’Us, short for Developers Are Us, is an app that our team created
for developers to network and collaborate on projects. Once the event is
posted the software developers who are looking for networking opportunities
will be able to see the event that was posted and its details. We used a few
technologies in our project in order to create the simple sleek layout, for the
font-end we used HTML, CSS and JavaScript, Bootstrap   , Materialize and
Google Fonts; for the back-end of the project we used the following: MYSQL,
MySql2, Express, Handlebars, Package JSON and Sequelize.
Front-End:
HTML &
JavaScript
Html and Javascript for the networking font-end.
<script>
     // Function that when the sumbit button is clicked, is goes to the view
events page and shows the post
     $("#submit").click(function() {
       var eventName = $("#eventName")
         .val()
         .trim();
       var address = $("#inputAddress")
         .val()
         .trim();
       var city = $("#inputCity")
         .val()
         .trim();
       var zip = $("#inputZip")
         .val()
         .trim();
       var state = $("#inputState")
CSS
The css is to style the network, create event and view post.
Welcome
{
   padding-left: 5%;
   padding-right: 5%;
   padding-top: 2%;
   padding-bottom: 2%;
   margin-left: 33.33%;
   margin-right: 33.33%;
   background: rgba(61, 60, 60, 0.5);
   color: white;
   text-align: center;
   font-size: 40px;
 }
 .text{
   font-family: 'Acme', sans-serif;
 }
Back-End:
The json use in the back-end to transmit the data and handlebars is use deployed from the logic-based JavaScript files, and handle serves purpose as well
orm It is used primarily to transmit data between a server and web application,
serving as an alternative to XM
app.get("/", async (req, res) => {
      try {
        const event = await db.event.findAll({});
        const networking = await db.networking.findAll({});
        res.render("index", { event: event, networking: networking });
      } catch (err) {
        console.log(err);
      }provide the back-end support to managing everything with node.jsMysql gives a template for the developer to create it own database; andmysql2 is use to connect to mysql.app.get("/", async (req, res) => {
     try {
        const event = await db.event.findAll({});
        const networking = await db.networking.findAll({});
        res.render("index", { event: event, networking: networking });
      } catch (err) {
        console.log(err);
      }
