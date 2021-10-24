import {createContext, useContext, useState, useEffect} from "react";
import {getDataFromCollection} from "firebase/func"

const MainContext = createContext();

export const MainContextProvider = ({children}) => {
  const [prop, setProp] = useState(null);
  useEffect(async ()=> {
    const [members, fatigueCollection] = await refreshData();
    setProp({
    members,
    fatigueCollection
    })
  },[])
  console.log(prop)
  return (
    <MainContext.Provider value={prop}>{children}</MainContext.Provider>
  )
}

const refreshData = async () => {
  const members = await getDataFromCollection("Members");
  const fatigueCollection = await getDataFromCollection("WorkingFatigue");
  return [members, fatigueCollection];
}
