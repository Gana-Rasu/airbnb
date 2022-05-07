import React from "react";


function Navbar(){
return(
<>
{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand" href="/#">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png" alt="" width="30" height="24" className=" image"/>
      airbnb
    </div>
  </div>
</nav> */}

<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png" alt="" width="30" height="24" className=" image d-inline-block "/>
       <span className="title" >airbnb</span>
    </a>
  </div>
</nav>

</>
);
}

export default Navbar;
