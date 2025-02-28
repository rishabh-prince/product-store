import { useState } from "react";
import { toast } from "react-toastify";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const {createProduct} = useProductStore();
  const handleSubmit = async (e)=>{
    e.preventDefault();
     const {success,message}=await createProduct(newProduct);
     success ? toast.success(message):toast.error(message);
     console.log(success,message);
     setNewProduct({...setNewProduct,name:"",price:"",image:""});
  }
  return (
    <>
      <div className="sm:w-2/3 md:w-1/2 w-5/6 bg-gradient-to-r from-slate-500 to-slate-800 m-auto min-h-7/12 p-10 text-center mt-10 shadow-2xl shadow-blue-300 rounded-2xl">
        <h1 className="font-bold text-5xl text-white">Create New Product</h1>
        <form action="" className="my-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name" 
            value={newProduct.name}  onChange={((e)=>setNewProduct({...newProduct,name:e.target.value}))}
            placeholder="Product Name"
            className="w-5/6 border-zinc-200 border-2 p-2 rounded-md my-4 outline-0"
          />
          <input
            type="text"
            name="price"
            value={newProduct.price}
            placeholder="Product Price" onChange={((e)=>setNewProduct({...newProduct, price:e.target.value}))}
            className="w-5/6 border-zinc-200 border-2 p-2 rounded-md my-4 outline-0"
          />
          <input
            type="text"
            name="image"
            value={newProduct.image}
            placeholder="Image URL" onChange={((e)=>setNewProduct({...newProduct, image:e.target.value}))}
            className="w-5/6 border-zinc-200 border-2 p-2 rounded-md my-4 outline-0"
          />
          <button className="p-3 rounded-xl w-5/6 mt-5 font-bold font-serif bg-white text-xl box-border cursor-pointer hover:bg-gradient-to-r from-amber-500 to-pink-500">
            Create New Product
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePage;
