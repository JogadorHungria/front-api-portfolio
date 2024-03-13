import axios from "axios";

  let token : string | null = null
  let profile: any = null

  const Api_portfolio = axios.create({
    // baseURL: "https://api-portifolio-egw8.onrender.com",
    baseURL: "https://localhost:3000",
    timeout: 30000,
  });


  const logar = async ()  => {

    const user = {
      email: "novousuario@gmail.com",
      password: "1234"
    }

    await Api_portfolio.post("/login", user)
    .then(response => {
      
    
      token = response.data.token
      console.log(token)
     

    }).catch(error => {
      
      console.error("Ocorreu um erro:", error);

    });

    return token
  }

  const get_profile = async ()  => {

     await Api_portfolio.get("/user/profile", {

      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      
      console.log(response.data)
  
    }).catch(error => {
      
      console.error("Ocorreu um erro: get_profile", error);

    });

  }

  const api_portifolio = {
    logar,
    get_profile
  }

  export default api_portifolio
  