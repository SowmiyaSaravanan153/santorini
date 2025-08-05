import styles from '../Common.module.css';
import roomimg1 from './imggalary1.png';
import roomimg2 from './imggalary2.png';
import roomimg3 from './imggalary3.png';
import roomimg4 from './imggalary4.png';

function OurRoom()
{
    return(
       <div className = {styles.ourroomhead}> 
        <h4>SECTION OVERLINE</h4>
        <h1>
            Our Rooms 
        </h1>
        <hr className = {styles.hrline } />
        <br/>
        <div className = {styles.roomcontainer}>
            <div className = {styles.roomitem1}>
                <div>
                  <img src = {roomimg1} className = {styles.roomimgdetails} alt = "room img " /> 
                  <h4> 2 BEDS </h4>
                  <h2> Hera</h2>
                  <p>
                    Kale chips kanusgaard mustache blog fashion axe selfies salvia. Gluten-free <br/> 
                     post-ironix deep typewriter.

                  </p>
                 <button type = "submit " className = {styles.roombutton }>
                    View Room
                  </button>
                </div>
                <div>
                  <img src = {roomimg2} className = {styles.roomimgdetails} alt = "room img " /> 
                  <h4> 4 BEDS </h4>
                  <h2> Dimitra </h2>
                  <p>
                    Kale chips kanusgaard mustache blog fashion axe selfies salvia. Gluten-free <br/> 
                     post-ironix deep typewriter.

                  </p>
                  <button type = "submit " className = {styles.roombutton }>
                    View Room
                  </button>
                </div>
            </div>
                <div className = {styles.roomitem2}>
                   <div>
                  <img src = {roomimg3} className = {styles.roomimgdetails} alt = "room img " /> 
                  <h4> 2 BEDS </h4>
                  <h2> Apollo </h2>
                  <p>
                    Kale chips kanusgaard mustache blog fashion axe selfies salvia. Gluten-free <br/> 
                     post-ironix deep typewriter.

                  </p>
                  <button type = "submit " className = {styles.roombutton }>
                    View Room
                  </button>
                </div>
                   <div>
                  <img src = {roomimg4} className = {styles.roomimgdetails} alt = "room img " /> 
                  <h4> 4 BEDS </h4>
                  <h2> Athena </h2>
                  <p>
                    Kale chips kanusgaard mustache blog fashion axe selfies salvia. Gluten-free <br/> 
                     post-ironix deep typewriter.

                  </p>
                  <button type = "submit " className = {styles.roombutton }>
                    View Room
                  </button>
                </div>
                </div>

            </div>
        </div>
    );
}

export default OurRoom ;

