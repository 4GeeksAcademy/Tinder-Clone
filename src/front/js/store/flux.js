const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      users: []
		},
		actions: {
			getReview: async () => {
				const response = await fetch(process.env.BACKEND_URL+"");
				if (response.status===200){
					const data = await response.json();
					data? setStore({...getStore,reviews:data}) : setStore({...getStore,reviews:[]})
					return 
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
        
      }
		}
	};
};

export default getState;
