import React, { Component } from "react";
import Footer from "../components/Footer";
import Container from "../components/Container";
// import Column from "../components/Column";
// import Row from "../components/Row";
import "./Resources.css";
import API from "../utils/API.js"
import ResourceCard from "../components/ResourcesCards/ResourcesCards";
import techlogo from "../tech_image.json";

class Resources extends Component {
   state = {
     resources: {}
   };

   componentDidMount() {
     this.showResourceList();
   }

   showResourceList = () => {
    
     API.showResourceList()
       .then(res => {
         console.log("success");
         console.log(res);
         this.setState({
           resources: res.data
         })
       })
       .catch(err => console.log("fail"));
   };


  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  render() {
    const { profile } = this.state;

    return (
      <div className="resc">
        <div className="container-profile-resc">
          <h1>{profile.name}</h1>
          <div className="profile-area-resc">
            <img src={profile.picture} alt="" />
          </div>
        </div>

        <Container>
          <div className="logo-cards">
          
          {techlogo.map(logo => (
            <ResourceCard 
              key={logo.id}
              image={logo.image}
            />
          ))}
          </div>
        </Container>
      
        <Footer />
      </div>

    );
  }
}


export default Resources;


