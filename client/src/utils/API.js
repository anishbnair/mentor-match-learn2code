import axios from "axios";


export default {


  createUser:function(){
    return axios.post("/api/developer")
  },

  getUserProfile: function(){
  return axios.get('/api/developer/')


},


saveResources: function(){
return axios.put('/api/developer'/+ user)
},

saveUserConnection: function(){
return axios.put('/api/developer/'+user)
},

deleteresource: function(){
  return axios.put('/api/developer/'+user)
},

showResourceList: function(){
  return axios.post('/api/resources')

},

showConnection: function(){
  return axios.get('/api/connect')
}


};
