import React from "react";
import "../../App.css";

const teamMembers = [
  {
    name: "Lawson Arnold",
    role: "CEO, Founder, Atty.",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "https://themewagon.github.io/furni/images/person_1.jpg", // Replace with your image
  },
  {
    name: "Jeremy Walker",
    role: "CEO, Founder, Atty.",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "https://themewagon.github.io/furni/images/person_2.jpg",
  },
  {
    name: "Patrik White",
    role: "CEO, Founder, Atty.",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "https://themewagon.github.io/furni/images/person_3.jpg",
  },
  {
    name: "Kathryn Ryan",
    role: "CEO, Founder, Atty.",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "https://themewagon.github.io/furni/images/person_4.jpg",
  },
  {
    name: "Joe Aryan",
    role: "CEO, Founder, Atty.",
    height: "180px",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "https://cdn.prod.website-files.com/612c348f70b2c4dae6f7eaa7/612c348f70b2c48620f7eabc_john-carter-photo-agencies-x-webflow-template-p-500.jpeg",
  }
];

function TeamSection() {
  return (
    <div className="team-section">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} style={member.height ? { height: member.height } : {}} />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="desc">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
