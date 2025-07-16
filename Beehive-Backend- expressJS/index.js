const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const beehivesRouter = require("./routes/beehives");
const authRouter = require("./routes/auth");

const app = express();
connectDB();

const cors = require("cors");
app.use(cors({
  origin: '*',
  credentials: true,

}));
app.use(express.json());
app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World ✌️" });
});

app.use("/api/auth", authRouter);
app.use("/api/beehives", beehivesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
