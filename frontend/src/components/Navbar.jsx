import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="max-w-250 mx-auto mt-2 h-16 p-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-sm flex justify-between items-center">
        <Link
          to={"/"}
          className="text-2xl font-bold font-serif text-white"
        >
          PRODUCT STORE 🛒
        </Link>

        <Link to={"/create"} className="mr-2">
          <MdOutlineAddBox size={"25"} />
        </Link>
      </div>
    </>
  );
}

export default Navbar