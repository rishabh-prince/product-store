import { useEffect, useState } from "react";
import { useProductStore } from "../store/product"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import {Link} from "react-router-dom";
import UpdateProduct from "../components/UpdateProduct";
import ImageModel from "../components/ImageModel";

const HomePage = () => {
  const {products,fetchProducts,deleteProduct}=useProductStore();
  const [updateProduct,setUpdateProduct]=useState();
  const [isImageOpen,setIsImageOpen]=useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false)

  const handleUpdate=(product)=>{
     setIsOpen(true);
     setUpdateProduct(product);
  }
  const handleImageClick=(url)=>{
    setImageUrl(url);
    setIsImageOpen(true);
  }
   
  useEffect(()=>{
    fetchProducts();
  },[fetchProducts])

  return (
    <div className=" relative bg-gradient-to-t from-teal-200 via-violet-600 to-rose-50 sm:w-5/6 w-full mx-auto my-10 text-center p-5">
      <h1 className="font-semibold bg-gradient-to-b from-indigo-600 via-pink-700 to-rose-600 bg-clip-text text-transparent text-3xl text-center font-serif">
        Current Products 🚀
      </h1>
      {products.length > 0 ? (
        <div className="sm:w-5/6 w-11/12 flex flex-wrap justify-between bg-gradient-to-br from-pink-500 via-gray-300 to-red-400 mx-auto my-5 rounded-md p-5 box-border">
          {products.map((product) => (
            <div
              className="md:w-11/24 w-5/6 lg:w-7/24 bg-gradient-to-t from-emerald-900 via-blue-400 to-amber-600 rounded-md shadow-2xl shadow-blue-700 p-2 h-72 my-3 mx-auto 
              hover:scale-105 transition duration-700"
              key={product._id}
            >
              <img
                src={product.image}
                alt="image not found"
                className="w-full object-cover h-1/2"
                onClick={() => handleImageClick(product.image)}
              />
              <h2 className="font-semibold text-xl mt-2">{product.name}</h2>
              <h2 className="font-semibold text-xl mt-2">
                ₹ {product.price}/-
              </h2>
              <div className="flex mt-3 w-full justify-evenly">
                <div
                  className="bg-green-400 p-2 rounded-md cursor-pointer"
                  title="Update"
                  onClick={() => handleUpdate(product)}
                >
                  <FaEdit size={"18"} />
                </div>
                <div
                  className="bg-red-500 p-2 rounded-md cursor-pointer"
                  title="Delete"
                  onClick={() => deleteProduct(product._id)}
                >
                  <MdDelete size={"18"} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto w-5/6 mt-10">
          <span className="text-2xl">No Product Found ☹ </span>
          <Link to={"/create"} className="text-2xl text-blue-700">
            Create a product 😀
          </Link>
        </div>
      )}
      <div
        className={`fixed sm:top-1/4 sm:left-1/5 top-1/4 left-1/12 w-5/6 sm:w-7/12 mx-auto bg-zinc-500 rounded-lg ${
          isOpen ? "block" : "hidden"
        } p-7`}
      >
        <UpdateProduct
          updateProduct={updateProduct}
          setIsOpen={setIsOpen}
          setUpdateProduct={setUpdateProduct}
        />
      </div>
      <div
        className={`fixed sm:top-1/4 sm:left-1/6 md:left-1/4 top-1/4 left-1/12 w-5/6 sm:w-2/3 md:w-5/12 mx-auto h-96 bg-gradient-to-b from-yellow-400 to-rose-500 rounded-lg ${
          isImageOpen ? "block" : "hidden"
        }`}
      >
        <ImageModel url={imageUrl} setIsImageOpen={setIsImageOpen} />
      </div>
    </div>
  );
}

export default HomePage