import React, { Component } from "react";
import Panel from "../components/Panel";
import Footer from "../components/Footer";
// import App from "../App";

class HomePage extends Component {
  //   state = {
  //     mentors: {}
  //   };

  //   componentDidMount() {
  //     this.loadMentors();
  //   }

  //   loadMentors = () => {
  //     this.setState({ mentors: sampleMentors });
  //   };

  render() {
    return (
      //   <div className="mentor-connect">
      //     <div className="mentors">
      //       <ul className="mentor">
      //         {Object.keys(this.state.mentors).map(key => (
      //           <Mentor key={key} index={key} details={this.state.mentors[key]} />
      //         ))}
      //       </ul>
      //     </div>
      //   </div>
      <div>
        {/* <App /> */}
        <Panel />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
