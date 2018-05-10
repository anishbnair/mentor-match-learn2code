import axios from "axios";


export default {

    //user is created in database
  createUser:function(userinfo){
    return axios.post('api/home',userinfo)
  },
  // createUser:function(userinfo){
  //   return axios.post("/api/dashboard",userinfo)
  // },


  getUserProfile: function(){
  return axios.get('/api/dashboard')

},

  updateUserProfile:function(updateInfo){
  console.log("API.js" + JSON.stringify(updateInfo))
    return axios.put('/api/home', updateInfo)
},

saveResources: function(){
return axios.put('/api/dashboard')
},

saveUserConnection: function(){
return axios.put('/api/developer/')
},

deleteresource: function(){
  return axios.put('/api/developer/')
},

showResourceList: function(){
  return axios.post('/api/resources')

},

showConnection: function(){
	console.log("this is showConnection");
  return axios.get('/api/connect')
}


};
