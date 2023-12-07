import { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

const Favs = () => {  
  
  const { dataState, dataDispatch } = useGlobalContext();
  
    useEffect(() => {
      const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
      dataDispatch({ type: "ADD_FAV", payload: storedFavs });
    }, [dataDispatch]);

    const handleRemoveFav = (id) => {
      const updatedFavs = dataState.favs.filter((fav) => fav.id !== id);
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      dataDispatch({ type: "ADD_FAV", payload: updatedFavs });
    };
    console.log("dataState.favs>>",dataState.favs)
  return (
    <>
      <div className="mt-[68px] py-4">
        <h1 className="my-4 mx-auto sm:w-[774px] md:w-[px] lg:w-[1324px]">
          Dentists Favs
        </h1>
        <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap h-auto max-w-7xl mx-auto text-center">
          {dataState.favs.length === 0 ? (
            <h1 className="my-4 mx-auto sm:w-[774px] md:w-[px] lg:w-[1324px]">
              No hay favoritos 🤷‍♂️
            </h1>
          ) : (
            dataState.favs.map((fav) => (
              <div className="flex flex-col items-center mx-4 p-4" key={fav.id}>
                <Card
                  name={fav.name}
                  username={fav.username}
                  id={fav.id}
                  favToggle={fav.toggle}
                  onRemoveFav={() => handleRemoveFav(fav.id)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Favs;
