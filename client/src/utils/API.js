import axios from "axios";


export default {


  createUser:function(){
    return axios.post("/api/dashboard")
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
  return axios.get('/api/connect')
}


};
