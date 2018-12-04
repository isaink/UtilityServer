const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("", (req, res) => { // query parameters through GET requests

})




const port = 3000;
app.listen(port, () => {
  console.log("You are listening to port 3000");
});
