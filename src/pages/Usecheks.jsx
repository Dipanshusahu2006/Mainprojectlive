import React, { useEffect, useState } from "react";
import "../App.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Usermailecheks() {
  const navigate = useNavigate();
  const Id = localStorage.getItem("Ids");
   const userId = localStorage.getItem("Ids");
  const [Cartdata, setCartdata] = useState([]);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [Useradderss, setUseradderss] = useState("");
  const [userpincode, setuserpincode] = useState("");
  const [userstate, setuserstate] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!Id) return;
    const fetchConfirmData = async () => {
      try {
        const response = await fetch(`https://main-projectnode.vercel.app/user/Get/${Id}`);
        const data = await response.json();
        const users = data?.Data || {};
        setEmail(users.email || "");
        setNumber(users.phone || "");
        setUseradderss(users.Useraddress || "");
        setuserpincode(users.Userpincode || "");
        setuserstate(users.Userstate || "");
        setUsername(users.username || "Guest");
      } catch {
        toast.error("Failed to load user info");
      }
    };
    fetchConfirmData();
    Cartsdata();
  }, [Id]);

  async function Cartsdata() {
    try {
      const response = await fetch(`https://main-projectnode.vercel.app/cart/Get/${userId}`);
      const cartspost = await response.json();
      setCartdata(cartspost.Data || []);
    } catch {
      toast.error("Error fetching cart data");
    }
  }

  async function Confirmforms() {
    if (!email || !number || !Useradderss) {
      toast.error("Please fill all required details");
      return;
    }

    const ConfirmsUsers = {
      email: email.trim(),
      phone: number.trim(),
      Useraddress: Useradderss.trim(),
      Userpincode: userpincode.trim(),
      Userstate: userstate.trim(),
    };

    try {
      const Profilecheck = await fetch(`https://main-projectnode.vercel.app/user/Edit/${Id}`, {
        method: "PUT",
        body: JSON.stringify(ConfirmsUsers),
        headers: { "Content-Type": "application/json" },
      });

      const OrderRes = await fetch("https://main-projectnode.vercel.app/order/Post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          username,
          email,
          address: `${Useradderss}, ${userstate}, ${userpincode}`,
          products: Cartdata.map((item) => ({
            ProductName: item.ProductName,
            ProductImage: item.ProductImage,
            ProductPrice: Number(item.ProductPrice),
            ProductCategory: item.ProductCategory,
            ProductQuantity: item.ProductQuantity,
          })),
          TotalAmount: Cartdata.reduce(
            (sum, item) => sum + Number(item.ProductPrice) * item.ProductQuantity,
            0
          ),
        }),
      });

      if (!OrderRes.ok) {
        throw new Error("Order creation failed");
      }

      await fetch(`https://main-projectnode.vercel.app/cart/Delete/${userId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (Profilecheck.ok) {
        toast.success("Order confirmed successfully!");
        setTimeout(() => navigate("/Qrcode"), 2000);
      } else {
        toast.error("User update failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <Helmet>
        <title>User Checkout Confirmation</title>
      </Helmet>
      <Toaster />
      <div className="userconfirm">
        <div className="congirm">
          <h1>Checkout process form</h1>
          <label>Email:</label>
          <input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />

          <label>Number:</label>
          <input
            placeholder="Enter your number"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <br /><br />

          <label>Address:</label>
          <input
            placeholder="Enter your address"
            type="text"
            value={Useradderss}
            onChange={(e) => setUseradderss(e.target.value)}
          />
          <br /><br />

          <label>Pincode:</label>
          <input
            placeholder="Enter your pincode"
            type="text"
            value={userpincode}
            onChange={(e) => setuserpincode(e.target.value)}
          />
          <br /><br />

          <label>State:</label>
          <input
            placeholder="Enter your state"
            type="text"
            value={userstate}
            onChange={(e) => setuserstate(e.target.value)}
          />
          <br /><br />

          <button onClick={Confirmforms}>Confirm to Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Usermailecheks;
