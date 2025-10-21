import React, { useEffect, useState } from "react";
import '../App.css';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function EditUser(){
    const Id =localStorage.getItem("Ids")
    const Edittransfer =useNavigate()

    const [username, setUsername] = useState("");
      const [useremail, setUseremail] = useState("");
      const [userpassword, setUserpassword] = useState("");
      const [usernumber, setUsernumber] = useState("");
      const [Userimage, setUserimage] = useState("");
      const [userole, setuserole] = useState("");

     const Editprofiles = (e) => {
    e.preventDefault();
    EditsUsers();
  }


  useEffect(() => {
        const fetchUserData = async () => {
          const response = await fetch(`https://main-projectnode.vercel.app/user/Get/${Id}`);
          const data = await response.json();
         const UsersEdit = data?.Data || {}; 
          setUsername(UsersEdit.username);
          setUseremail(UsersEdit.email);
          setUserpassword(UsersEdit.password);
          setUsernumber(UsersEdit.phone);
           setUserimage(UsersEdit.profileimage);
          setuserole(UsersEdit.role);
        };
        fetchUserData();
      }, [Id]);

  async function EditsUsers() {
    const Editdata = {
      username: username,
      email: useremail,
      password: userpassword,
      phone: usernumber,
      profileimage: Userimage,
      role: userole
    };
    

    try {
      const Edits = await fetch(`https://main-projectnode.vercel.app/user/Edit/${Id}`, {
        method: "PUT",
        body: JSON.stringify(Editdata),
        headers: {
          "Content-Type": "application/json"
        }
      });
    if ( Edits.ok) {
        toast.success("User Edits successfully");
        setTimeout(() => {
        Edittransfer ("/");
      }, 3000);
      } else {
        toast.error("Error Edits up");
      }
    } catch (error) {
      toast.error("Please try again");
    }
  }


return(
    <>
    <Toaster/>
    <div className="Editusers">
        <form onSubmit={Editprofiles}>
         <label>Username</label>
         <input  value={username}  type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}/><br></br>
         <label>profileimage</label>
         <input value={Userimage} type="text" placeholder="Enter your image"  onChange={(e) => setUserimage(e.target.value)}/><br></br>
         <label>UserEmail</label>
         <input value={useremail}  type="email" placeholder="Enter your Email" onChange={(e) => setUseremail(e.target.value)}/><br></br>
         <label>Userpassword</label>
         <input value={userpassword}  type="password" placeholder="Enter your password" onChange={(e) => setUserpassword(e.target.value)}  /><br></br>
         <label>Usernumber</label>
         <input value={usernumber} type="number" placeholder="Enter your Number" onChange={(e) => setUsernumber(e.target.value)}/><br></br>
         <label>role</label>
         <input  value={userole} type="text" placeholder="Enter your role" onChange={(e) => setuserole(e.target.value)}/><br></br>
         <button  type="submit">Edit</button>
        </form>
    </div>
    </>
)
}
export {EditUser}

