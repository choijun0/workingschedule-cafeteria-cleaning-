import {useState, useEffect} from "react"
import {MainContextProvider} from "MainContext"
import Signin from "components/Signin"
import {authService} from "firebase/func"

const App = () => {
  const [init, setInit] = useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((admin)=>{
      if(admin){
        console.log("admin is online")
      }
      setInit(true);
    })
  },[]);  
  return <>
    {init ? (
      <MainContextProvider>
        <Signin />
      </MainContextProvider>
    ) : "Initializing..."} 
  </>
}

export default App;