// Umu Olugu
import { useState, useEffect } from "react";
import roomDetails from "./roomDetails.js";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./AvailableRooms.css";

function AvailableRooms(props) {
  const [implementCartOpen, setImplementCartOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    setImplementCartOpen(props.cartOpen);
  });
  let initial = 0;
  console.log(total);
  console.log(props.cartData);
  let pricingTotal =
    props.cartData.length === 0
      ? initial
      : props.cartData.reduce((total, item) => {
          return total + item.pricing;
        }, 0);

  // let pricingTotal = 0;

  let CartData = props.cartData.map((data) => {
    let handlePay = () => {
      props.setCartOpen(!implementCartOpen);
      alert("Input Card Details and proceed to checkout");
    };
    return (
      <>
        <section
          className="roomDeet"
          key={Math.floor(Math.random() * 1008000) + 1}
        >
          <img src={data.image} alt={data.image} className="roomDeetImg" />
          <section className="side">
            <h2>{data.name}</h2>
            <p>{data.details}</p>
            <ul>
              {data.properties.map((prop) => {
                return (
                  <li key={Math.floor(Math.random() * 100000) + 1}>{prop}</li>
                );
              })}
            </ul>
            <section className="availableFoot">
              <span>#{data.pricing}/Day</span>
              <button className="addToCart" onClick={handlePay}>
                Pay
              </button>
            </section>
          </section>
        </section>
        <br />
      </>
    );
  });

  let roomDeets = roomDetails.map((detail) => {
    const handleAddToCart = () => {
      setCartDetails((prevCartDetails) => {
        return [...prevCartDetails, detail];
      });
      props.setCartData((prevCartData) => {
        return [...prevCartData, detail];
      });
    };

    return (
      <>
        <section
          className="roomDeet"
          key={Math.floor(Math.random() * 1008000) + 1}
        >
          <img src={detail.image} alt={detail.image} className="roomDeetImg" />
          <section className="side">
            <h2>{detail.name}</h2>
            <p>{detail.details}</p>
            <ul>
              {detail.properties.map((prop) => {
                return (
                  <li key={Math.floor(Math.random() * 100000) + 1}>{prop}</li>
                );
              })}
            </ul>
            <section className="availableFoot">
              <span>#{detail.pricing}/Day</span>
              <button className="addToCart" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </section>
          </section>
        </section>
        <br />
      </>
    );
  });

  return (
    <>
      {props.userDatas ? (
        <section className="availableRooms">
          <section className="reservation">
            <h2>Reservation Details</h2>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{props.userDatas[0].name}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>{props.userDatas[0].phoneNumber}</td>
                </tr>
                <tr>
                  <td>Check In</td>
                  <td>{props.userDatas[0].formattedStartDate}</td>
                </tr>
                <tr>
                  <td>Check Out</td>
                  <td>{props.userDatas[0].formattedEndDate}</td>
                </tr>
                <tr>
                  <td>Total Nights</td>
                  <td>{props.userDatas[0].differenceDates}</td>
                </tr>
                <tr>
                  <td>Total Rooms</td>
                  <td>{props.userDatas[0].rooms}</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="available">
            <header>
              <h2>Available Rooms</h2>
            </header>
            {roomDeets}
          </section>
        </section>
      ) : (
        <span className="linkError">
          <Link to="/">Go Home</Link> and Input Details
        </span>
      )}
      {implementCartOpen ? (
        <section className="cart">
          <div
            className="close"
            onClick={() => {
              props.setCartOpen(!implementCartOpen);
            }}
          >
            X
          </div>
          <section className="cartContainer">
            <section className="cartHeader">
              <h2>Total</h2>
              <p>{pricingTotal}</p>
            </section>
            {CartData}
          </section>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default AvailableRooms;
