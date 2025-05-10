import dotenv from 'dotenv';
import express from 'express';
import path from "path";

import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());// allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes)

if(process.env.NODE_ENV === "production"){
    console.log("in production");
    const path_join = path.join(__dirname, "/frontend/dist")
    console.log({path_join});
    
    app.use(express.static(path_join));
    const path_resolve = path.resolve(__dirname, "frontend", "dist", "index.html");
    console.log({path_resolve});
    
    app.get("/{*any}", (req, res) => {
        res.sendFile(path_resolve);
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);    
});
