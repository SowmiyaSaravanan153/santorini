import styles from '../Common.module.css';
import services1 from './services1.png';
import services2 from './services2.png';
import services3 from './services3.png';


function Services() {
    return ( 
        <div> 
            <p> SECTION OVERELINE</p>
            <h2> Additional Services</h2>
            <div className = {styles.servicescontainer } >
                 <div> 
                     <img src = {services1} alt = "services 1 img " className= {styles.serviceimg}/>
                     <h4> SERVICES</h4>
                    <h2>  Driving Services </h2>
                     <p> Kale chips knausgad mustache blog fashion <br/> axe selfies salvia. Gluten-free post-ironic deep <br/>  typewriter.</p>

                 </div>
                 <div>

                     <img src = {services2} alt = "services 2 img " className= {styles.serviceimg} />
                     <h4> SERVICES</h4>
                     <h2> Private Yoga Sessions </h2>
                     <p> Kale chips knausgad mustache blog fashion <br/> axe selfies salvia. Gluten-free post-ironic deep <br/>  typewriter.</p>


                 </div>
                 <div>

                     <img src = {services3 } alt ="services3 img"className= {styles.serviceimg}/>
                     <h4> SERVICES</h4>
                     <h2>  Local Cuisine seminars </h2>
                     <p> Kale chips knausgad mustache blog fashion <br/> axe selfies salvia. Gluten-free post-ironic deep <br/>  typewriter.</p>


                 </div>
            </div>
        </div>
    );
}


export default Services;
