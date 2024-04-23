const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        token: null,
        message: null,
        demo: [
          {
            title: "FIRST",
            background: "white",
            initial: "white",
          },
          {
            title: "SECOND",
            background: "white",
            initial: "white",
          },
        ],
      },
      actions: {
        // Use getActions to call a function within a fuction
        syncSessionToken: () => {
          const token = sessionStorage.getItem("token");
          if (token && token !== "" && token !== undefined) {
            setStore({ token: token });
          }
        },
  
        login: async (email, password) => {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          };
          try {
            const response = await fetch(
              process.env.BACKEND_URL + "/api/token",
              options
            );
            if (response.status !== 200) {
              alert("error response code ", response.status);
              return false;
            }
            const data = await response.json();
            console.log("access token ", data);
            sessionStorage.setItem("token", data.access_token);
            console.log("Token data:", data.access_token);
            setStore({ token: data.access_token });
            console.log("Store token after update:", getStore().token);
  
            return true;
          } catch (error) {
            console.log("login error");
          }
        },
  
        logout: () => {
          sessionStorage.removeItem("token");
          console.log("You are logged out");
          setStore({ token: null });
        },
  
        addUser: async (email, password) => {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          };
          try {
            const response = await fetch(
              process.env.BACKEND_URL + "/api/signup",
              options
            );
            if (response.status !== 200) {
              alert("Error response code ", response.status);
              return false;
            }
            const data = await response.json();
            console.log("from the backend", data);
            return true;
          } catch (error) {
            console.log("login error");
          }
        },
  
        // exampleFunction: () => {
        // 	getActions().changeColor(0, "green");
        // },
  
        // getMessage: async () => {
        // 	try{
        // 		// fetching data from the backend
        // 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
        // 		const data = await resp.json()
        // 		setStore({ message: data.message })
        // 		// don't forget to return something, that is how the async resolves
        // 		return data;
        // 	}catch(error){
        // 		console.log("Error loading message from backend", error)
        // 	}
        // },
        // changeColor: (index, color) => {
        // 	//get the store
        // 	const store = getStore();
  
        // 	//we have to loop the entire demo array to look for the respective index
        // 	//and change its color
        // 	const demo = store.demo.map((elm, i) => {
        // 		if (i === index) elm.background = color;
        // 		return elm;
        // 	});
  
        // 	//reset the global store
        // 	setStore({ demo: demo });
        // }
      },
    };
  };
  
  export default getState;
  