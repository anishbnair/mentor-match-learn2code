import axios from "axios";


export default {


  createUser:function(userinfo){
    return axios.post("/api/dashboard",userinfo)
  },


  getUserProfile: function(){
  return axios.get('/api/dashboard')

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
