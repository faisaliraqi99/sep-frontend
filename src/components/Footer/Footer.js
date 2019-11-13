import React from 'react'

import './Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="footerLeft">
                <p className="desc1">Наш адрес: <br/>lorem ipsum</p>
                <p className="desc2">Наш телефон: <br/><a href="tel:+996700402161">+996700402161</a></p>
                </div>  
                <div className="footerRight">
                <div className="desc3">

                    <p>У нас вы получите:</p>
                    What is Lorem Ipsum?<br/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br/>
                    standard dummy text ever since the 1500s, when an unknown 
                </div>
                </div>
            </div>
        )
    }
}

export default Footer