import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";
import { Pagination } from "../Components/Pagination";

const Favs = () => {  
  
  const { dataState, dataDispatch } = useGlobalContext();

  const CARDS_PER_PAGE = 2;
  const totalCards = dataState.favs.length;
  // eslint-disable-next-line no-unused-vars
  const [cardsPerPage, setCardsPerPage] = useState(CARDS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  
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
      <div className="mt-24 py-4">
        <h1 className="mx-auto sm:w-[774px] md:w-[px] lg:w-[1324px]">
          Dentists Favs
        </h1>
        <div className="flex flex-wrap justify-center gap-4 h-auto max-w-7xl mx-auto my-6 text-center">
          {dataState.favs.length === 0 ? (
            <h1 className="mt-28 mx-auto sm:w-[774px] md:w-[px] lg:w-[1324px] xs:text-sm lg:text-2xl">
              No hay favoritos 🤷‍♂️
            </h1>
          ) : (
            dataState.favs
              .map((fav) => (
                <div
                  className="flex flex-col items-center justify-center mx-4 p-4"
                  key={fav.id}
                >
                  <Card
                    name={fav.name}
                    username={fav.username}
                    id={fav.id}
                    favToggle={fav.toggle}
                    onRemoveFav={() => handleRemoveFav(fav.id)}
                  />
                </div>
              ))
              .slice(firstIndex, lastIndex)
          )}
        </div>
        {dataState.favs.length === 0 ? "" :
        <Pagination
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          setCurrentPage={setCurrentPage}
          totalCards={totalCards}
        />
}
      </div>
    </>
  );
}

export default Favs;
