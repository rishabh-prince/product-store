import express from "express";
import { createProduct, getProducts, updateProduct, deleteProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/products", getProducts);
router.put("/updateproduct/:id", updateProduct);
router.post("/createproduct", createProduct);
router.delete("/delete/:id", deleteProduct);

export default router;