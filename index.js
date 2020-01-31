const express = require("express")
const http = require("http");
const bodyParser = require("body-parser");
const app = express()
const server =http.createServer(app);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Listening on port ${port}`));

app.post("/",(request,response)=>{
  app.post("http://localhost:4001",request.body);
  console.log(request.body);
    response.send({
      "challenge":request.body.challenge})
})
