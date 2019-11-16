import React from 'react';

import jpg from '../About/img/3807.jpg'

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

                    <h2>Обычаи и традиции кыргызов</h2>
                    Как и всех остальных народов мира, представляют собой сложный и богатый по своему содержанию этнический комплекс.  На формирование его характерных признаков большое влияние оказала тюрко-монгольская кочевая культура. Кроме того, в нем плотно переплелись обрядовые составляющие, возникшие в различные исторические эпохи. Поэтому, наряду с традициями ислама, здесь обнаруживается огромный пласт доисламских культов, обычаев и верований, которые зачастую играют главенствующую роль.
                    <h1>lorem</h1>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    <h3>lorem</h3>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                  </div>
            </div>
          </div>
        </div>
      </>
      );
    }
  }
  
export default About