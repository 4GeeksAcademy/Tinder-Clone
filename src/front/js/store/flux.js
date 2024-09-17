const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      users: [],
      reviews: []
		},
		actions: {
			getReviews: async () => {
        try{
          const response = await fetch(process.env.BACKEND_URL+"/reviews",{
            method:'GET'
          });
          console.log(response)
          if (!response.ok){
            throw new Error('Network response was not ok')
          }
          const data = await response.json();
          setStore({...getStore,reviews:data})
          return 
        } catch(e){
          throw e
        }
			},
      registerUserData: async(registerUserData) => {
        try{
          const res = await fetch(process.env.BACKEND_URL+"register", {
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
      getUsers: async ()=>{
        try {
          const resp = await fetch(process.env.BACKEND_URL+"/users",{
            method:"GET"
          })
          if(resp.status===200){
            const data = await resp.json()
            setStore({...getStore(),users:data})
            return data
          }
        } catch (error) {
          
        }
      }
		}
	};
};

export default getState;
