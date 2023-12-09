import { useGlobalContext } from "../Components/utils/global.context";
import Card from "../Components/Card";
import { Pagination } from "../Components/Pagination";
import { useState } from "react";
// import { usePathname} from 'next/navigation'

const Home = () => {
  const { dataState, dataDispatch } = useGlobalContext();
  // const path = usePathname()
  
  const CARDS_PER_PAGE = 4;
  const totalCards = dataState.listData.length;
  // eslint-disable-next-line no-unused-vars
  const [cardsPerPage, setCardsPerPage] = useState(CARDS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  
  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;  

  const handleRemoveFav = (id) => {
    const updatedFavs = dataState.favs.filter((fav) => fav.id !== id);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
    dataDispatch({ type: "ADD_FAV", payload: updatedFavs }); 
  };

  return (    
      <div className="mt-[100px] py-2 text-center">
        <h3> (click on the card to see details)</h3>        
        <div className="flex flex-wrap justify-center gap-4 h-auto mx-auto my-6 text-center">
          {dataState.listData
            .map((list) => (
              <div
                className="flex flex-col items-center mx-4 p-4 justify-center"
                key={list.id}
              >
                <Card
                  name={list.name}
                  username={list.username}
                  id={list.id}
                  favToggle={list.toggle}
                  onRemoveFav={() => handleRemoveFav}
                />
              </div>
            ))
            .slice(firstIndex, lastIndex)}
        </div>
        <Pagination
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          setCurrentPage={setCurrentPage}
          totalCards={totalCards}
        />
      </div>    
  );
};

export default Home;
