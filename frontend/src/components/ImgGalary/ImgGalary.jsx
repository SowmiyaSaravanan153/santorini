import styles from '../Common.module.css';
import imggalary1 from './imggalary1.png';
import imggalary2 from './imggalary2.png';
import imggalary3 from './imggalary3.png';
import imggalary4 from './imggalary4.png';


function ImgGalary() {
    return (
        <div>
            <h4> SECTION OVERLINE </h4>
            <h1> Image Galary </h1>
            <div className = {styles.imgcontainer } >
                <div> 
                    <img src = {imggalary1 } alt = "img galary1 "className = {styles.imggalary} />
                </div>
                <div> 
                    <img src = {imggalary2 } alt = "img galary2 "className = {styles.imggalary} />
                </div>
                <div> 
                    <img src = {imggalary3 } alt = "img galary3 " className = {styles.imggalary} />
                </div>
                <div> 
                    <img src = {imggalary4 } alt = "img galary4 " className = {styles.imggalary} />
                </div>
            </div>
        </div>
    );

}

export default ImgGalary;
