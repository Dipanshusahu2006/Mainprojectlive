import React, { useEffect, useRef, useState, useCallback } from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import Shooping from "../Images/Shooping.png";
import { useCart } from "react-use-cart";

function Header({ setSearchQuery }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.border = "2px solid #ff3b3b";
      inputRef.current.style.boxShadow = "0 0 10px rgba(255,59,59,0.5)";
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (setSearchQuery) setSearchQuery(input);
  };

  const Id = localStorage.getItem("Ids");
  const { totalUniqueItems } = useCart();

  const [buttne1, setbuttne1] = useState({ display: "block" });
  const [buttne2, setbuttne2] = useState({ display: "none" });
  const [buttne3, setbuttne3] = useState({});
  const [buttne4, setbuttne4] = useState({});
  const [LoginButtone, setLoginButtone] = useState({});
  const [profiles, setprofile] = useState({ display: "none" });
  const [slicenurl, setslicenurl] = useState({});
  const [Cartnumbers, setCartnumbers] = useState([]);
  const [Bell, setBelll] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1228);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1228);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const Imges = {
    img123:
      "https://your-daily-need.netlify.app/static/media/icon-headphone%20-%20Copy.c3fb047a0eb9f39bc24262dda11da296.svg",
  };

  // ✅ Use useCallback to safely include in useEffect dependency array
  const Profiles = useCallback(async () => {
    if (!Id) return;
    try {
      const profilename = await fetch(
        `https://main-projectnode.vercel.app/user/Get/${Id}`
      );
      const SliceNames = await profilename.json();
      setslicenurl(SliceNames?.Data || {});
    } catch (err) {
      console.error("Profile fetch failed:", err);
    }
  }, [Id]);

  const Cart = useCallback(async () => {
    try {
      const Cartnumber = await fetch("https://main-projectnode.vercel.app/cart/Get");
      const Cartitems = await Cartnumber.json();
      setCartnumbers(Cartitems.Data || []);
    } catch (err) {
      console.error("Cart fetch failed:", err);
    }
  }, []);

  const Bells = useCallback(async () => {
    try {
      const Bellnumber = await fetch("https://main-projectnode.vercel.app/adminreply/Get");
      const Bellitems = await Bellnumber.json();
      setBelll(Bellitems.Data || []);
    } catch (err) {
      console.error("Bell fetch failed:", err);
    }
  }, []);

  useEffect(() => {
    Profiles();
    Bells();
    Cart();
  }, [Profiles, Bells, Cart]);

  const Slicename = slicenurl.username ? slicenurl.username.slice(0, 1) : "";

  const Slice1 = () => {
    setbuttne1({ display: "none" });
    setbuttne2({ display: "block" });
    setprofile({ display: "block" });
  };

  const Slice2 = () => {
    setbuttne1({ display: "block" });
    setbuttne2({ display: "none" });
    setprofile({ display: "none" });
  };

  const Slice3 = () => {
    setbuttne3({ display: "none" });
    setbuttne4({ display: "block" });
    setprofile({ display: "block" });
  };

  const Slice4 = () => {
    setbuttne3({ display: "block" });
    setbuttne4({ display: "none" });
    setprofile({ display: "none" });
  };

  const Logout = () => {
    localStorage.removeItem("Ids");
    setbuttne1({ display: "none" });
    setbuttne2({ display: "none" });
    setprofile({ display: "none" });
    setLoginButtone({ display: "block" });
  };

  return (
    <>
      <div className="Header">
        <div className="Upperhaeder">
          <div className="profilename">
            <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
            <img src={Shooping} alt="Shopping logo" />
          </div>

          <div className="a4">
            <div className="h4">
              <h4>All Categories</h4>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="input">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search For items...."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onClick={handleFocus}
              />
              <button type="submit" onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>

          <div className="logos">
            <ul>
              <li>
                <NavLink to={"productcart"}>
                  <span>{Cartnumbers.length}</span>
                  <i className="fa-solid fa-cart-shopping"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/whislist"}>
                  <span>{totalUniqueItems}</span>
                  <i className="fa-solid fa-heart"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Myenqries"}>
                  <span>{Bell.length}</span>
                  <i className="fa-solid fa-bell"></i>
                </NavLink>
              </li>
              <li
                className="Hiddenprofilebuttone1"
                onClick={Slice3}
                style={buttne3}
              >
                <i className="fa-solid fa-user"></i>
              </li>
              <li
                className="Hiddenprofilebuttone2"
                onClick={Slice4}
                style={buttne4}
              >
                <i className="fa-solid fa-user"></i>
              </li>
            </ul>

            {!Id ? (
              <button className="Login-buttone" style={LoginButtone}>
                <Link to={"/Login"}>Log-in</Link>
              </button>
            ) : (
              <>
                <button className="btn1" onClick={Slice1} style={buttne1}>
                  {Slicename}
                </button>
                <button className="btn2" onClick={Slice2} style={buttne2}>
                  {Slicename}
                </button>
              </>
            )}
          </div>
        </div>

        <div
          className="underhedaer"
          style={
            isMobile
              ? { transform: menuOpen ? "translateX(0)" : "translateX(-370px)" }
              : {}
          }
        >
          <div className="main-menu">
            <div className="MENUEBAR">
              <i className="fa-solid fa-barcode"></i>
            </div>
            <div className="Category">
              <h1>Browse All Category</h1>
              <button className="close-menu" onClick={() => setMenuOpen(false)}>
                &times;
              </button>
            </div>
          </div>

          <div className="menu">
            <ul>
              <li>
                <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/About"} className={({ isActive }) => (isActive ? "active" : "")}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Service"} className={({ isActive }) => (isActive ? "active" : "")}>
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink to={"/order"} className={({ isActive }) => (isActive ? "active" : "")}>
                  Order
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Contact"} className={({ isActive }) => (isActive ? "active" : "")}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Shop"} className={({ isActive }) => (isActive ? "active" : "")}>
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="main-micro">
            <div className="mICROPHONE">
              <img src={Imges.img123} alt="Customer service icon" />
            </div>
            <div className="customes">
              <h1>1988-899</h1>
              <h2>24/7 Customers Support</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="PROFILES" style={profiles}>
        <div className="profilesimeges">
          <img src={slicenurl.profileimage} alt="User profile" />
          <i className="fa-solid fa-camera"></i>
        </div>
        <h2>{slicenurl.username}</h2>
        <h3>{slicenurl.email}</h3>
        <h3>{slicenurl.password}</h3>
        <h3>{slicenurl.phone}</h3>
        <h3>{slicenurl.role}</h3>

        <div className="Editbutone">
          <button>
            <Link to={"/EditUser"}>Edit</Link>
          </button>
          <button onClick={Logout}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Header;
