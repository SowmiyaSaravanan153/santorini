import styles from '../Common.module.css';

function HomeForm() {
    return (
        <div className = {styles.homeFormContainer}> 
          <div className = {styles.homeformitem1}>
            <h4> Welcome to our Luxury<br/> Villa!</h4>
            <hr> </hr>
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
                  <input type="text" placeholder="your Name" required />
                  <input type="email" placeholder="your Email" required />
                    <input type="text" placeholder="Please add your request booking dates here" required />
                  <button type="submit">    REQUEST AVAILABILIY </button>
                </form>
         </div>
        </div>
        
        
        
        
        
        
    );
}

export default HomeForm ;