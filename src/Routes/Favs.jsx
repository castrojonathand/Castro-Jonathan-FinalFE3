import { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {  
  // eslint-disable-next-line no-lone-blocks
  {/* este componente debe consumir los destacados del localStorage */}
  
  const {dataState, dataDispatch}=useGlobalContext()
  useEffect(() =>{
    console.log("Local Favs ",dataState.favs)
    dataDispatch({type:'ADD_FAV', payload: dataState.favs})   
    dataState.favs = JSON.parse(localStorage.getItem("favs"));    
    
    },[dataState.favs]) 
    
  return (
    <>
      <div className={dataState.theme ? "light" : "dark"}>
        <div className="mt-[68px] py-4">
          <h1>Dentists Favs</h1>
          {/* Deberan renderizar una Card por cada uno de ellos */}
          <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap h-auto max-w-7xl mx-auto text-center">
            {dataState.favs.map((fav) => (
              <div className="flex flex-col items-center mx-4 p-4" key={fav.id}>
                <Card
                  name={fav.name}
                  username={fav.username}
                  id={fav.id}
                  toogle={fav.toggle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Favs;
