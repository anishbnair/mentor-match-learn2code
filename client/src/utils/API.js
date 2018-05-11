import axios from "axios";


export default {

    //user is created in database
    createUser: function(userinfo) {
        return axios.post('api/home', userinfo)
    },

    // createUser:function(userinfo){
    //   return axios.post("/api/dashboard",userinfo)
    // },

    getUserProfile: function() {
        return axios.get('/api/dashboard')
    },

    getUserPreference: function() {
        return axios.get('/api/home')
    },

    updateUserProfile: function(updateInfo) {
        console.log("API.js" + JSON.stringify(updateInfo))
        return axios.put('/api/home', updateInfo)
    },

    saveResources: function() {
        return axios.put('/api/dashboard')
    },


    deleteresource: function() {
        return axios.put('/api/developer/')
    },

    showResourceList: function() {
        return axios.post('/api/resources')

    },

    //these methods are used by the Connect Page

    showConnection: function() {
        console.log("this is showConnection");
        return axios.get('/api/connect')
    },

    saveUserConnection: function(userIndex, mentorIndex) {
        console.log("this is saveUserConnection");
        return axios.put('/api/developer/', {userIndex, mentorIndex})
    }

};