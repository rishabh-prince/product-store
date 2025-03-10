import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? "http://localhost:5173"
        : "https://product-store-sgse.onrender.com",
  })
);
const __dirname = path.resolve();
app.use(express.json());
app.use(express.urlencoded());

app.use("/api", productRoutes);
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}



app.listen(PORT,()=>{
    connectDB();
    console.log("server running at port number ",PORT);
})
