import { RxCross2 } from "react-icons/rx";

const ImageModel = ({ url, setIsImageOpen }) => {
  return (
    <>
      <div className="w-full h-full relative p-3">
        <img src={url} alt="image" className="w-full h-full" />
        <div className="absolute right-4 top-4 rounded-full w-8 h-8 bg-amber-500 cursor-pointer flex justify-center items-center" onClick={()=>setIsImageOpen(false)}>
        <RxCross2 size={"25"} />
        </div>
      </div>
    </>
  );
};

export default ImageModel;
