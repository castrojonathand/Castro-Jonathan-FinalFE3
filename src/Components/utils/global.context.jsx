
import { createContext,useContext,useEffect,useReducer} from "react";

export const GlobalContext  = createContext()

export const initialState = {
  theme: true, //si theme es true el modo sera light de lo contrario dark....
  listData: [],
  dentist: {},
  favs: JSON.parse(localStorage.getItem("favs")) || []
} 

const dataReducer = (state,action) =>{
    switch (action.type) {
      case 'GET_LIST':
        return {...state, listData: action.payload}

      case 'GET_DENTIST':
        return {...state, dentist: action.payload}
      
      case 'CHANGE_THEME':
        return {...state, theme: action.payload}
      
      case 'ADD_FAV':
        return {...state, favs:  action.payload}   
      

      default:
        throw new Error(`Invalid action ${action.Error.message}`);
    }
}

const Context = ({ children }) => {
  
    const [dataState, dataDispatch] = useReducer(dataReducer,initialState);

    const urlList = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() =>{
      fetch(urlList)
      .then(res=> res.json())
      .then(data=> dataDispatch({type:'GET_LIST', payload:data} ))
      .catch(error => console.log(error))

    },[])     
      return (
      <GlobalContext.Provider value={{
        dataState,
        dataDispatch
      }}>
        {children}
      </GlobalContext.Provider>
    );
};
export default Context

export const useGlobalContext = () => useContext(GlobalContext)