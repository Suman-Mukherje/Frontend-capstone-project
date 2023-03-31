import React from "react";
import AboutImg from "../assets/a1.jpg";

const Contact = () => {
  return (
  <>
      <section class="contact" id="contact">
            <h1 class="heading">
               <span>Reserve </span> table
            </h1>
           <div class="row">
           
           <div className="image">
            <img src={AboutImg} alt="" />

          </div>
          
               <form action="">
                <h3>Booking Form</h3>
            <div class="column" >
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="Your name" pattern="[a-zA-Z]{1,15}" title="Name should only contain  letters. e.g. John" required/>
            </div>
            
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="tel" placeholder="Your phonenumber"  pattern="[0-9]{3}[0-9]{3}[0-9]{4}" title="Phone No should contain 10 digit" required/>
            </div>
            <div class="inputBox">
            <label for="res-date">Reservation Date</label>
            <input type="date" id="res-date" required></input>
            </div>
           </div>
           <div class="column"> 
           <div class="inputBox">
            <label for="res-time">Choose time </label>
                 <select id="res-time " required>
                      
                      <option>17:00</option>
                      <option>18:00</option>
                      <option>19:00</option>
                      <option>20:00</option>
                      <option>21:00</option>
                      <option>22:00</option>
                  </select>
            </div>
            <div class="inputBox">
               <label for="guests">Number of guests</label>
              <input type="number" placeholder="1" min="1" max="10" id="guests" required/> 
            </div>
            <div class="inputBox">
            <label for="occasion">Occasion</label>
                <select id="occasion" required>
                
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
                </select>
            </div>
            </div>
            <input type="submit" value="Book Reservation" class="btn" />
          </form>
         
        </div>
      </section>
    </>
  );
};

export default Contact;
