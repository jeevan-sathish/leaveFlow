import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("lf_access_token");
    navigate("/login");
    window.location.reload();
  }
  return (
    <div className=" flex  w-full h-14 gap-5   justify-center items-center bg-pink-300 absolute top-0 z-50">
      <Link to="/">
        <butto>Home</butto>
      </Link>
      <Link to="/about">
        <butto>About</butto>
      </Link>
      <Link to="/login">
        <butto>Login</butto>
      </Link>
      <Link to="/dashboard">
        <butto>Dashboard</butto>
      </Link>
      <button
        className="bg-red-500 rounded-2xl text-white p-2 "
        onClick={handleLogout}
      >
        LogOut
      </button>
    </div>
  );
};

export default Nav;
