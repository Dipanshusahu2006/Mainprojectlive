import React, { useState } from "react";
import "../App.css";
import toast, { Toaster } from "react-hot-toast";

function Enqries() {
  const [CustomerName, setCustomerName] = useState("");
  const [Emaileaddress, setEmaileaddress] = useState("");
  const [BillNumber, setBillNumber] = useState("");
  const [CustomerNumber, setcustomerNumber] = useState("");
  const [Customerenquarirss, setCustomerenquarirs] = useState("");

  const handelsbmit = (e) => {
    e.preventDefault();
    FetchEnquries();
  };

  async function FetchEnquries() {
    const Enquirydata = {
      CustomerName,
      Emaileaddress,
      BillNumber,
      CustomerNumber,
      Customerenquarirs: Customerenquarirss,
    };

    try {
      const Enquirys = await fetch("https://main-projectnode.vercel.app/enqury/Post", {
        method: "POST",
        body: JSON.stringify(Enquirydata),
        headers: { "Content-Type": "application/json" },
      });

      if (Enquirys.ok) {
        toast.success("Enquiry posted successfully");
        setTimeout(() => {
          localStorage.setItem("userEmail", Emaileaddress);
        });
      } else {
        toast.error("Error posting enquiry");
      }
    } catch (error) {
      toast.error("Please try again");
      console.error(error);
    }
  }

  return (
    <>
      <Toaster />
      <div className="MAIN-ENQUARY">
        <div className="enquary">
          <h1>Enquiry Form</h1>
          <p>
            If you have any queries, kindly take a moment to fill this form. Our
            representative will connect with you shortly.
          </p>
          <form onSubmit={handelsbmit}>
            <label htmlFor="CustomerName">Name:</label>
            <input
              id="CustomerName"
              value={CustomerName}
              type="text"
              placeholder="Customer name"
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
            <br /><br />
            <label htmlFor="Emaileaddress">Email address:</label>
            <input
              id="Emaileaddress"
              value={Emaileaddress}
              type="email"
              placeholder="Mail@example.com"
              onChange={(e) => setEmaileaddress(e.target.value)}
              required
            />
            <br /><br />
            <label htmlFor="BillNumber">Bill Number:</label>
            <input
              id="BillNumber"
              value={BillNumber}
              type="text"
              placeholder="Bill Number"
              onChange={(e) => setBillNumber(e.target.value)}
              required
            />
            <br /><br />
            <label htmlFor="CustomerNumber">Phone Number:</label>
            <input
              id="CustomerNumber"
              value={CustomerNumber}
              type="number"
              placeholder="Customer Phone Number"
              onChange={(e) => setcustomerNumber(e.target.value)}
              required
            />
            <br /><br />
            <label htmlFor="Customerenquarirs">Customer Enquiries:</label>
            <textarea
              id="Customerenquarirs"
              value={Customerenquarirss}
              placeholder="Your Queries"
              onChange={(e) => setCustomerenquarirs(e.target.value)}
              required
            ></textarea>
            <br /><br />
            <button className="button1" type="submit">
              Submit
            </button>
          </form>
        </div>

        {/* ✅ Added descriptive title to iframe */}
        <div className="IFRAME">
          <iframe
            title="Gopalam Jewels Jaipur Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.05321101635!2d75.62574595312086!3d26.88511514457059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1745419324131!5m2!1sen!2sin"
            width="610"
            height="560"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Enqries;
