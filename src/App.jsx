import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AvailableRooms from "./components/Available Rooms/AvailableRooms";

export default function App() {
  const [userDatas, setUserDatas] = useState();
  const [cartData, setCartData] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar
        cartData={cartData}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
      <Routes>
        <Route path="/" element={<Home setUserDatas={setUserDatas} />} />
        <Route
          path="/rooms"
          element={
            <AvailableRooms
              userDatas={userDatas}
              cartData={cartData}
              setCartData={setCartData}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
            />
          }
        />
      </Routes>
    </>
  );
}
