import React from "react";
import "../../App.css";
import sofa from '../../Images/sofa.png';



function AboutFooter() {
  return (
    <footer className="About-footer">
      <div className="Aboutfooter-main">
        <div className="Aboutfooter-left">
          <h2>Furni.</h2>
          <p>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant
            Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
        </div>

        
        <div className="Aboutfooter-image">
          <img src={sofa} alt="chair" />
        </div>
      </div>
    </footer>
  );
}

export default AboutFooter;
