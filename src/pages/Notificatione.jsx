import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "../CommonElements/Header";
import { Helmet } from "react-helmet";

function MyEnquiries() {
  const userId = localStorage.getItem("Ids");
  const [Notificitione, setNotificitione] = useState([]);

  useEffect(() => {
    const fetchReply = async () => {
      try {
        const AdminReply = await fetch(
          `https://main-projectnode.vercel.app/adminreply/Get/${userId}`
        );
        const Replydata = await AdminReply.json();
        setNotificitione(Replydata.Data || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchReply();
  }, [userId]); // ✅ only depend on userId

  return (
    <>
      <Helmet>
        <title>My Notifications</title>
      </Helmet>
      <Header />
      <div className="AdminsReply">
        <h1>Admin reply</h1>
        <div className="Enqries-reply">
          {Notificitione.map((Reply, index) => (
            <div className="Enquirynotificatione" key={index}>
              <h1>To {Reply.CustomerName}</h1>
              <h3>{Reply.Emaileaddress}</h3>
              <p>{Reply.Reply}</p>
              <h4>For Owner</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyEnquiries;
