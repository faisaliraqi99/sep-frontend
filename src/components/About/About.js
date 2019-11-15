import React from 'react';

import jpg from '../About/img/s.jpg'
import './About.css';

class About extends React.Component{
  render(){
    return (
      <>
        <div className="about">
          <div className="container">
            <div className="about-header">
              <img className="about-header-img" src={jpg} alt="header"></img>
              <div className="about-header-body">
                <div className="about-header-card">
                </div>
              </div>
                  <div className="about-header-text">

                    <h2>What is Lorem Ipsum?</h2>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                  </div>
            </div>
          </div>
        </div>
      </>
      );
    }
  }
  
export default About