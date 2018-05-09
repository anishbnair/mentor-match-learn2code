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

  updateUserProfile:function(){
  return axios.put('/api/dashboard')
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
  return axios.get('/api/connect')
}


};
