import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/userRoute.js";

const app = express();
dotenv.config();

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);

app.get("/", async (req, res) => {
    res.send("server is well !!!!!!!!!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});