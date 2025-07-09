import express from "express";
import cors from "cors";

const app = express();
const port = 9000;

// ✅ فعل CORS قبل أي route
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    hello: "welcome to amd hackathon"
  });
});

app.listen(port, () => {
  console.log("Running at http://localhost:9000/");
});