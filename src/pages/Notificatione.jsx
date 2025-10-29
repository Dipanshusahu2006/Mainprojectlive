import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "../CommonElements/Header";
import { Helmet } from "react-helmet";

function MyEnquiries() {
  const userId = localStorage.getItem("Ids");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchReply = async () => {
      try {
        const response = await fetch(
          `https://main-projectnode.vercel.app/adminreply/Get/${userId}`
        );
        const data = await response.json();
        setNotifications(data.Data || []);
      } catch (error) {
        console.error("Failed to fetch replies:", error);
      }
    };

    fetchReply();
  }, [userId]);

  return (
    <>
      <Helmet>
        <title>My Notifications | MyShop</title>
      </Helmet>

      <Header />

      <div className="AdminsReply">
        <h1>Admin Notifications</h1>

        {notifications.length === 0 ? (
          <p className="no-replies">No notifications found</p>
        ) : (
          <div className="Enqries-reply">
            {notifications.map((reply, index) => {
              const date = reply.createdAt
                ? new Date(reply.createdAt).toLocaleDateString()
                : "—";
              const time = reply.createdAt
                ? new Date(reply.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "";

              return (
                <div className="Enquirynotificatione" key={index}>
                  <div className="notification-header">
                    <h2>To: {reply.CustomerName}</h2>
                    <small className="notif-date">
                      {date} • {time}
                    </small>
                  </div>
                  <h4>{reply.Emaileaddress}</h4>
                  <p>{reply.Reply}</p>
                  <h5>— Admin Team</h5>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default MyEnquiries;
