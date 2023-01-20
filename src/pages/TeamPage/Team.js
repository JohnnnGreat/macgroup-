import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
function TeamPage() {
  function Show() {
    useEffect(() => {
      scroll.scrollToTop();
    }, []);
  }

  Show();
  return (
    <div>
    //Write the Team section here...
    </div>
  );
}

export default TeamPage;
