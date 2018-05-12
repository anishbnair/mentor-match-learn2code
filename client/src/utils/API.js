import axios from "axios";

export default {
  //user is first checked in database and will be created if not found in database on initial sign in
  createUser: function(userinfo) {
    return axios.post("api/home", userinfo);
  },
  // createUser:function(userinfo){
  //   return axios.post("/api/dashboard",userinfo)
  // },

  getUserProfile: function() {
    return axios.post("/api/dashboard");
  }, ///retrieves selected technologies
  getUserPreference: function(e) {
    console.log(
      "API.js file:***** expecting: jones.nadia.l@gmail.com ...Actual:"
    );
    console.log(e);
    return axios.post("/api/dashboard", e);
  },

  userPreference: function(e) {
    console.log(
      "API.js file:***** expecting: jones.nadia.l@gmail.com ...Actual:"
    );
    console.log(e);
    return axios.get("/api/userPref", e);
  },

  updateUserProfile: function(updateInfo) {
    console.log("API.js" + JSON.stringify(updateInfo));
    return axios.put("/api/dashboard", updateInfo);
  },

  saveResources: function() {
    return axios.put("/api/dashboard");
  },

  deleteresource: function() {
    return axios.put("/api/developer/");
  },

  showResourceList: function() {
    return axios.get("/api/resources");
  },

  //these methods are used by the Connect Page

  showConnection: function() {
    console.log("this is showConnection");
    return axios.get("/api/connect");
  },

  saveUserConnection: function(userIndex, mentorIndex) {
    console.log("this is saveUserConnection");
    return axios.put("/api/developer/", { userIndex, mentorIndex });
  }
};
