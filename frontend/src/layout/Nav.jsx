import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full h-14 flex justify-center items-center bg-pink-300">
      <Link to="/about">
        <butto>About</butto>
      </Link>
    </div>
  );
};

export default Nav;
