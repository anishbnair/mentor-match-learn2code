import React from "react";
import './Panel.css';

import ment1 from '../../images/ment1.jpg';
import ment2 from '../../images/ment2.jpg';
import ment3 from '../../images/ment3.jpg';
import ment4 from '../../images/ment4.jpg';

const Panel = () => (
  <div>

      <h1 className="App-title">A code community for developer mentorship where peers can connect to mentors who are willing to help them.</h1>

      <div>
        <img src={ment3} alt="mentor" className="image-info"/>
        <div id="section-1">
            <p>
              Do you want to become a developer?
            </p>
            <br></br>
            <p>
              Do you need guidance getting into the industry? 
            </p>
            <br></br>
            <p>
              Do you have knowledge to share?
            </p>
            <br></br>
            <p>
              Are you a Developer that would like to mentor?
            </p>
        </div>
      </div>

       <div>
        <div id="section-2">
          <p>
            Get instant coding help, build projects faster and read tutorials from our free on-line resources.
          </p>
        </div>
        <img src={ment1} alt="mentor" className="image-info"/>
      </div>

      <div>
        <img src={ment2} alt="mentor" className="image-info"/>
        <div id="section-3">
          <p>
            The user will have the ability to track the courses that they have had mentoring services provided for. 
            This way the user can create and track their individual learning path. 
          </p>
        </div>
      </div>

      <div>
        <div id="section-4">
          <p>
            Get answers to your coding problems, personalize your learning experience and learn to code while finding out what went wrong. 
          </p>
        </div>
        <img src={ment4} alt="mentor" className="image-info"/>
      </div>
  
  </div>
);

export default Panel;