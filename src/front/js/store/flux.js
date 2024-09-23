import { Rss } from "lucide-react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      users: [],
      matches: [],
      reviews: [],
      roles: [],
      genders: [],
      userToVerify: {},
      userDataLogin: {},
		},
		actions: {
			getReviews: async () => {
        try{
          const response = await fetch(process.env.BACKEND_URL + "/reviews",{
            method:'GET'
          });
          console.log(response)
          if (!response.ok){
            throw new Error('Network response was not ok')
          }
          const data = await response.json();
          console.log(data)
          setStore({...getStore,reviews:data})
          return 
        } catch(e){
          throw e
        }
			},
      registerUserData: async(registerUserData) => {
        try{
          const res = await fetch(process.env.BACKEND_URL+"/register", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerUserData)
          })
          const data = await res.json()
          if(!res.ok){
            throw new Error(data.msg)
          }
          return data
        }catch(error){
          throw error
        }        
      },
      loginUserData: async(loginUserData) => {
        try{
          const res = await fetch(process.env.BACKEND_URL+"/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginUserData)
          })
          const data = await res.json()
          if(!res.ok){
            throw new Error(data.msg)
          }
          if(data.access_token){
            localStorage.setItem('userDataLogin', JSON.stringify(data))
          }
          setStore({...getStore(),userDataLogin:data})
          return data
        }catch(error){
          throw error
        }        
      },
      preferencesUserData: async(preferencesUserData, token) => {
        try{
          const res = await fetch(process.env.BACKEND_URL+"/preferences", {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(preferencesUserData)
          })
          const data = await res.json()
          if(!res.ok){
            throw new Error(data.msg)
          }
          
          const existingUserData = JSON.parse(localStorage.getItem('userDataLogin'))
          existingUserData.preferences_set = data.preferences_set
          localStorage.setItem('userDataLogin', JSON.stringify(existingUserData))

          return data
        }catch(error){
          throw error
        }        
      },
      getUsers: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/users",{
            method:"GET",
            
          })
          if(resp.status===200){
            const data = await resp.json()
            setStore({...getStore(),users:data})
            return data
          }
        } catch (error) {
          throw error
        }
      },
      getUsersByPreferences: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/users_filtered",{
            method:"GET",
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('userDataLogin')).access_token}`
            }
          })
          if(resp.status===200){
            const data = await resp.json()
            setStore({...getStore(),users:data})
            return data
          }
        } catch (error) {
          throw error
        }
      },
      getGenders: async () => {
        try{
          const res = await fetch(process.env.BACKEND_URL + "/genders", {
            method: 'GET'
          })
          const data = await res.json()
          if(res.ok){
            setStore({...getStore(), genders:data})
            return data
          }
        }catch(error){
          throw error
        }
      },
      getRoles: async () => {
        try{
          const res = await fetch(process.env.BACKEND_URL + "/roles", {
            method: 'GET'
          })
          const data = await res.json()
          if(res.ok){
            setStore({...getStore(), roles:data})
            return data
          }
        }catch(error){
          throw error
        }
      },
      sendDataToVerifyIdentity: async (dni) => {
        try {
          const res = await fetch(process.env.BACKEND_URL + '/' + dni)
          if(!res.ok){
            throw new Error('Network response was not ok')
          }
          const data = await res.json()
          console.log("Data: ",data)
          setStore({...getStore(),userToVerify:data})
          return data
        } catch (error) {
          throw error
        }
      },
      getMatches: async () => {
        try {
          const res = await fetch(process.env.BACKEND_URL + "/matches" ,{
            method:"GET",
            headers: {
              'Authorization': `Bearer ${JSON.parse(localStorage.getItem('userDataLogin')).access_token}`
            }
          })
          if(!res.ok){
            throw new Error('Network response was not ok')
          }
          const data = await res.json()
          setStore({...getStore(), matches: data})
          return data
        } catch (error) {
          throw error
        }
      },
		}
	};
};

export default getState;
