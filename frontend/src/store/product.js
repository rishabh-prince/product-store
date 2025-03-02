import {create} from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

export const useProductStore = create((set)=>({
    products:[],
    setProducts: (products)=>set({products}),
    createProduct: async (newProduct) =>{
        if(!newProduct.name || !newProduct.image || !newProduct.price){
            return {success:false,message:"please fill all details"}
        }
        const response = await axios.post(
          "/api/createproduct",
          newProduct
        );
        set((state)=>({products:[...state.products,response.data]}));
        return {success:true,message:"product created successfully"};
    },
    fetchProducts: async ()=>{
        const res = await axios.get("/api/products");
        console.log(res);
        set({products:res.data.data});
    },
    deleteProduct : async (id)=>{
        const res = await axios.delete(`/api/delete/${id}`);
        console.log(res);
        if(!res.data.success){
            toast.error(res.message);
            return ;
        }

        set(state =>({products:state.products.filter(product=> product._id!==id)}));
        toast.success("product deleted successfully")
        return ;
    },
    productUpdate : async (product)=>{
        const res=await axios.put(`/api/updateproduct/${product._id}`,product);
        console.log(res);
        if(!res.data.success){
            toast.error(res.message);
            return ;
        }
        set(state=>({products:state.products.map(data=>data._id === product._id ? res.data.data : data)}))
        toast.success("product updated successfully");
    }
}))