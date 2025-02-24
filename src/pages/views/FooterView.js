import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';
const FooterView = ()=>{
return(
    <div className='footer'>
        <div className='up-section'>
            <div className='up-section-logo'>
               <a className='logotekst'>PROTIV</a>
            </div>
            <div className='up-section-info'>
                <div className='left-info'>
                    <p>O nas</p>
                    <p>Kontakt</p>
                </div>
                <div className='right-info'>
                    <p>Strona Główna</p>
                </div>
            </div>
            <div className='up-section-socialmedia'></div>
        </div>
    </div>
);
};









export default FooterView;

