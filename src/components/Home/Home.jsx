// import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import "./PhoneNumber.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

function Home({ setUserDatas }) {
  // States
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // States End

  const diff = date[0].endDate.getDate() - date[0].startDate.getDate();
  console.log(diff);
  // Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInput = document.querySelector("#fullName");
    const phoneNumber = document.querySelector("#phoneNumber");
    const roomsAndGuest = document.querySelector("#roomsAndGuest");

    setUserData(() => {
      return [
        {
          name: nameInput.value,
          phoneNumber: phoneNumber.value,
          rooms: roomsAndGuest.value,
          startDate: date[0].startDate,
          endDate: date[0].endDate,
          formattedStartDate: format(date[0].startDate, "MM/dd/yyyy"),
          formattedEndDate: format(date[0].endDate, "MM/dd/yyyy"),
          differenceDates:
            date[0].endDate.getDate() - date[0].startDate.getDate(),
        },
      ];
    });

    console.log(userData);
    navigate("/rooms", { replace: true });
  };
  // Submit Function End

  // Trigger Submit Function
  const handleAvailableClick = (e) => {
    document.querySelector("#checkAvail").click();
  };
  // Trigger Submit Function
  // useEffect(() => { console.log(userData) }, [])
  useEffect(() => {
    setUserDatas(() => {
      return userData;
    });
  });

  return (
    <>
      <motion.section
        initial={{ transform: "translate(100%, 0)" }}
        animate={{ transform: "translate(0%, 0)" }}
        transition={{ duration: 1 }}
        className="home"
      >
        <section className="reserve">
          <h2>Make Reservation</h2>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="Fullname" required />
            <label htmlFor="phoneNumber">Phone Number</label>
            <PhoneInput
              id="phoneNumber"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={setPhoneNumber}
              required
            />

            <label htmlFor="roomsAndGuest">Rooms and Guests</label>
            <select name="roomsAndGuest" id="roomsAndGuest" required>
              <option value="one">1 Room</option>
              <option value="two">2 Rooms</option>
              <option value="three">3 Rooms</option>
              <option value="four">4 Rooms</option>
              <option value="five">5 Rooms</option>
              <option value="six">6 Rooms</option>
            </select>
            <button type="submit" id="checkAvail">
              Check Available
            </button>
          </form>
        </section>
        <section className="availability">
          <h2>Availability</h2>
          <div className="calendar-container">
            {/* <Calendar value={arrivalDate} selectRange={true} /> */}
            <DateRange
              editableDateInputs={false}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={true}
              ranges={date}
              className="date"
              minDate={new Date()}
            />
          </div>
          <div className="availabilityButton">
            <button onClick={handleAvailableClick}>Check Available</button>
          </div>
        </section>
      </motion.section>
    </>
  );
}

export default Home;
