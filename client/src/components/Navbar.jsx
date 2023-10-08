import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  return (
    <nav className="sticky z-10  bg-gradient-to-r from-green-400 to-teal-400">
      <div className="flex md:flex-row justify-around  md:px-6 py-3 h-[50px] items-center align-middle">
        <div className="md:text-3xl tracking-wider font-bold text-white italic " onClick={()=>navigate("/")}>
          BuyIt
        </div>
        <div className="min-w-[200px] w-[50%]">
          <input type="text" className="w-[100%] border border-red-600" />
        </div>
        <div>
          {isLoggedIn ? (
            <>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Orders
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              Cart
            </>
          ) : (
            <div onClick={()=>navigate('/login')}>Login</div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
