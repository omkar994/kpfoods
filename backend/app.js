const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoDB = require("./db");

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Reuested-With, Content-Type, Accept"
  );
  next();
});


mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(express.json());
app.use('/api', require("./routes/allroutes"));
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});