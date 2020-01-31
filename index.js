const express = require("express")
const http = require("http");
const bodyParser = require("body-parser");
const app = express()
const server =http.createServer(app);
const router = express.Router();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Listening on port ${port}`));
router.get("/",(req,res)=>{
    res.send(<h1>Hello</h1>)
})
app.post("/",(request,response)=>{
  console.log(request);
    response.send({
      "challenge":request.body.challenge})
})
