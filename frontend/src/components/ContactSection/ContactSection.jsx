//import React from 'react';
import styles from '../Common.module.css';
import hotel1 from './hotel1.png';
import hotel2 from './hotel2.png';
import hotel3 from './hotel3.png';
import hotel4 from './hotel4.png';  

function ContactSection(){
    return (
        <div className = {styles.contactsection}>
            <div className = {styles.contacttop1} >
                <div > 
                    <h4> About Us </h4>
                    <p>With the regularatory issue settled,<br/>
                         they said, Google could you get back to<br/>
                         focusing on selling ads across them. </p>
                </div>
                <div>
                    <h4>Recent Posts</h4>
                    <p> 
                        Round trip to Thassos <br/>
                        New Year's offer 2020 Summer Schedule 
                    </p>
                </div>
                <div className = {styles.contacttopinner}>
                     <img src = {hotel1} alt = "hotel1" width = "100px" height = "100px" />
                     <img src = {hotel2} alt = "hotel2" width = "100px" height = "100px" />
                     <img src = {hotel3} alt = "hotel3" width = "100px" height = "100px" />
                     <img src = {hotel4} alt = "hotel4" width = "100px" height = "100px" />                         
                </div>
            </div>
            <div className = {styles.contacttop2}>
                <div> <p> Home </p></div>
                <div> <p> Location </p></div>
                <div> <p> The Rooms  </p></div>
                <div> <p> Room Single  </p></div>
                <div> <p> Contact </p></div>
            </div>
        </div>
    );

}
export default ContactSection;