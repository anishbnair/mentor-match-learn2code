import axios from "axios";


export default {

running: function(){
  return axios.get("/api/dash")
},

  createUser:function(){
    return axios.post("/api/dashboard")
  },

  getUserProfile: function(){
  return axios.get('/api/developer')


},


saveResources: function(){
return axios.put('/api/developer')
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
