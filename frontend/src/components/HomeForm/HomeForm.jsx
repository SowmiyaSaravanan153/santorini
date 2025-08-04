import styles from '../Common.module.css';

function HomeForm() {
    return (
        <div className = {styles.homeFormContainer}> 
          <div className = {styles.homeformitem1}>
            <h1>Welcome to our Luxury<br/> Villa!</h1>
            <hr/>
            <p>Kale chips knausgaard mustache blog fashion axe selfies salvia. Gluten-free <br/>
            post-ironic deep v typewriter. Cloud bread flannel poke, flexitarian vinyl! <br/> 
            iphone chrunch-kay willian kitsch beard. <br/>
            </p>
            <h6> Thera84700, Greece</h6>
            <p> 23 KM from Massiki Airport </p>
           
          </div>

           <div className={styles.homeFormitem2}>
               <h2>Check Availability </h2>
               <form>
                  <label id = "name" > Name </label><br/> 
                  <input  className = {styles.custominput } type="text" placeholder="your Name"  required /> <br/><br/>

                  <label id = "email" > Email </label><br/>
                  <input className = {styles.custominput } type="email" placeholder="your Email" required /> <br/>

                  <label id = "msg" > Message </label><br/>
                  <input className= { styles.custominput2} type="text" placeholder="Please add your request booking dates here" required /> <br/><br/> 
                  <button className = {styles.requestbutton}type= "submit"> REQUEST AVAILABILITY </button>
                </form>
         </div>
        </div>
        
        
        
        
        
        
    );
}

export default HomeForm ;