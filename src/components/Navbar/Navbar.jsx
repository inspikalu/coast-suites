import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Logo from "/src/assets/Asset 1Logop.png";
function Navbar(props) {
  const handleClick = () => {
    props.setCartOpen(!props.cartOpen);
  };
  return (
    <>
      <section className="navBar">
        <section className="navImage">
          <Link to="/">
            <img src={Logo} alt="Logo" />
            <h1>Coast Suites</h1>
          </Link>
        </section>
        {props.cartData.length !== 0 ? (
          <span className="cartIcon" onClick={handleClick}>
            Cart <FontAwesomeIcon icon={faCartShopping} size="2xl" />
            <div className="bubble">{props.cartData.length}</div>
          </span>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default Navbar;
