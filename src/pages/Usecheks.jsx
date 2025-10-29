import React, { useEffect, useState } from "react";
import "../App.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Usermailecheks() {
  const navigate = useNavigate();

  const userId = localStorage.getItem("Ids");

  const [Cartdata, setCartdata] = useState([]);
  const [form, setForm] = useState({
    email: "",
    phone: "",
    Useraddress: "",
    Userpincode: "",
    Userstate: "",
    username: "",
  });

  // ✅ Handle input
  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // ✅ Fetch User + Cart Data
  useEffect(() => {
    if (!userId) return;

    const fetchUserData = async () => {
      try {
        const res = await fetch(
          `https://main-projectnode.vercel.app/user/Get/${userId}`
        );
        const data = await res.json();
        const users = data?.Data || {};

        setForm({
          email: users.email || "",
          phone: users.phone || "",
          Useraddress: users.Useraddress || "",
          Userpincode: users.Userpincode || "",
          Userstate: users.Userstate || "",
          username: users.username || "Guest",
        });
      } catch {
        toast.error("Failed to load user info");
      }
    };

    const fetchCartData = async () => {
      try {
        const res = await fetch(
          `https://main-projectnode.vercel.app/cart/Get/${userId}`
        );
        const data = await res.json();
        setCartdata(data?.Data || []);
      } catch {
        toast.error("Error fetching cart data");
      }
    };

    fetchUserData();
    fetchCartData();
  }, [userId]);

  // ✅ Confirm checkout
  async function Confirmforms() {
    const { email, phone, Useraddress, Userpincode, Userstate, username } = form;

    // Validate
    if (!email || !phone || !Useraddress) {
      toast.error("Please fill all required details");
      return;
    }

    // ✅ Body for updating user profile
    const UpdateUser = {
      email: email.trim(),
      phone: phone.trim(),
      Useraddress: Useraddress.trim(),
      Userpincode: Userpincode.trim(),
      Userstate: Userstate.trim(),
    };

    // ✅ Create order post structure
    const OrderBody = {
      userId,
      username,
      email,
      address: `${Useraddress}, ${Userstate}, ${Userpincode}`,
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
    };

    try {
      // ✅ Update profile
      const profileRes = await fetch(
        `https://main-projectnode.vercel.app/user/Edit/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(UpdateUser),
        }
      );

      // ✅ Create order
      const orderRes = await fetch(
        `https://main-projectnode.vercel.app/order/Post`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(OrderBody),
        }
      );

      if (!orderRes.ok) {
        throw new Error("Order creation failed");
      }

      // ✅ Delete cart
      await fetch(
        `https://main-projectnode.vercel.app/cart/Delete/${userId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (profileRes.ok) {
        toast.success("Order confirmed successfully!");

        setTimeout(() => {
          navigate("/Qrcode");
        }, 2000);
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
          <h1>Checkout Process Form</h1>

          {/* email */}
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
          />

          {/* phone */}
          <label>Number:</label>
          <input
            type="number"
            placeholder="Enter your number"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
          />

          {/* address */}
          <label>Address:</label>
          <input
            type="text"
            placeholder="Enter your address"
            value={form.Useraddress}
            onChange={(e) => updateField("Useraddress", e.target.value)}
          />

          {/* pincode */}
          <label>Pincode:</label>
          <input
            type="text"
            placeholder="Enter your pincode"
            value={form.Userpincode}
            onChange={(e) => updateField("Userpincode", e.target.value)}
          />

          {/* state */}
          <label>State:</label>
          <input
            type="text"
            placeholder="Enter your state"
            value={form.Userstate}
            onChange={(e) => updateField("Userstate", e.target.value)}
          />

          <button onClick={Confirmforms}>Confirm to Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Usermailecheks;
