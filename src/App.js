import React from "react";
import logo from "./png.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="placeholder" />
        <div className="info">
          <h2>WELCOME TO ANANT NIDHI PRIVATE LIMITED</h2>
          <p className="address">
            235, 2nd Floor Opposite Sector - 13 Entrance, Modal Town Hisar
            Haryana - 125001
          </p>
          <div className="contact">
            <p>
              Contact: 9015702702 <span> Email: infopb77@gmail.com</span>
            </p>
          </div>
          <p className="cin">CIN NO.: U65999HR2018PLC077024</p>
        </div>
      </div>
      <form className="personalDetails">
        <h4>Personal Details</h4>
        <div className="block1">
          <div className="fLname">
            <div className="fname">
              <label>Name</label>
              <br />
              <input type="text" />
            </div>
            <div className="lname">
              <label>Surname</label>
              <br />
              <input type="text" />
            </div>
          </div>
          <label>Aadhar Number</label>
          <br />
          <input type="text" />
          <br />
          <label>Mobile Number</label>
          <br />
          <input type="text" />
          <br />
          <label>Email Address</label>
          <br />
          <input type="text" />
          <br />

          <div className="fLname">
            <div className="fname">
              <label>Address</label>
              <br />
              <textarea />
            </div>
            <div className="lname">
              <label>Pin Code</label>
              <br />
              <input type="text" />
            </div>
          </div>
          <div className="fLname">
            <div className="fname">
              <label>Country</label>
              <br />
              <input type="text" />
            </div>
            <div className="lname">
              <label>State</label>
              <br />
              <input type="text" />
            </div>
            <div className="lname">
              <label>District</label>
              <br />
              <input type="text" />
            </div>
          </div>
          <div className="fLname">
            <div className="fname">
              <label>Gender</label>
              <br />
              <input type="text" />
            </div>
            <div className="lname">
              <label>Date Of Birth</label>
              <br />
              <input type="text" />
            </div>
          </div>
          <img src="https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg" alt="img" className="photo" />
        </div>

        <div className="block-2">
        <h4 className="b2-heading">Nominee Details</h4>
          <div className="fLname">
            <div className="fname">
              <label>Name</label>
              <br />
              <input type="text" />
            </div>
            <div className="lname">
              <label>Middle</label>
              <br />
              <input type="text" />
            </div>
            <div className="lname">
              <label>Surname</label>
              <br />
              <input type="text" />
            </div>
          </div>
          <div className="fLname">
            <div className="fname">
              <label>Nominee Relation</label>
              <br />
              <input type="text" />
            </div>
            <div className="lname">
              <label>Pan Card Number</label>
              <br />
              <input type="text" />
            </div>
          </div>
        </div>
      </form>
      <div className="btn">
        <button type="button" className="btn-primary">Submit</button>
      </div>

      <footer>
        <div className="cat-1">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Blog</p>
            <p>Careers</p>
        </div>
        <div className="cat-1">
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Safety Center</p>
            <p>Community Guidelines</p>
        </div>
        <div className="cat-1">
            <h4>Legal</h4>
            <p>Cookies Policy</p>
            <p>Privacy Policy</p>
            <p>Term of Service</p>
            <p>Low  Enforcement</p>
        </div>
        <div className="cat-1">
            <h4>Install App</h4>
        </div>
      </footer>
    </>
  );
}

export default App;
