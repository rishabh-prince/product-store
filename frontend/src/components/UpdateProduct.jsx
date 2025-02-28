import { useProductStore } from "../store/product";


const UpdateProduct = (props) => {
    const {updateProduct,setIsOpen,setUpdateProduct} = props;
    const {productUpdate}=useProductStore();
    const handleUpdate = async (e)=>{
         e.preventDefault();
         await productUpdate(updateProduct);
         setIsOpen(false);
    }
  return (
    <>
      <h1 className="text-3xl font-bold my-3">Update Product ✍</h1>
      <form action="">
        <input
          type="text"
          value={updateProduct ? updateProduct.name : ""}
          onChange={(e) =>
            setUpdateProduct({ ...updateProduct, name: e.target.value })
          }
          className="w-5/6 rounded-md p-3 mx-auto outline-0 border-2 border-zinc-300 mt-5"
        />
        <input
          type="text"
          value={updateProduct ? updateProduct.price : ""}
          onChange={(e) =>
            setUpdateProduct({ ...updateProduct, price: e.target.value })
          }
          className="w-5/6 rounded-md p-3 mx-auto outline-0 border-2 border-zinc-300 mt-5"
        />
        <input
          type="text"
          value={updateProduct ? updateProduct.image : ""}
          onChange={(e) =>
            setUpdateProduct({ ...updateProduct, image: e.target.value })
          }
          className="w-5/6 rounded-md p-3 mx-auto outline-0 border-2 border-zinc-300 mt-5"
        />
        <div className="flex sm:w-1/3 md:1/4 w-7/12 mx-auto justify-between">
          <button className="p-3 text-white hover:bg-cyan-600 bg-black font-bold rounded-md mt-3 cursor-pointer"
          onClick={handleUpdate}>
            Update
          </button>
          <div
            className="p-3 text-white bg-blue-700 hover:bg-amber-950 font-bold rounded-md mt-3 cursor-pointer"
            onClick={()=>setIsOpen(false)}
          >
            Cancel
          </div>
        </div>
      </form>
    </>
  );
}

export default UpdateProduct