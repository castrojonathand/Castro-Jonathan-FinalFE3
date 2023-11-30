import { useGlobalContext } from "../Components/utils/global.context";
import Card from "../Components/Card";
import Pagination from "../Components/Pagination";

const Home = () => {
  const { dataState, dataDispatch } = useGlobalContext();

  const handleRemoveFav = (id) => {
    const updatedFavs = dataState.favs.filter((fav) => fav.id !== id);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
    dataDispatch({ type: "ADD_FAV", payload: updatedFavs }); 
  };

  return (
    <main className={dataState.theme ? "light" : "dark"}>
      <div className="mt-[68px] py-4">
        <h3> (click on the card to see details)</h3>

        <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto max-w-7xl mx-auto text-center">
          {dataState.listData.map((list) => (
            <div className="flex flex-col items-center mx-4 p-4" key={list.id}>
              <Card
                name={list.name}
                username={list.username}
                id={list.id}
                favToggle={list.toggle}
                onRemoveFav={()=> handleRemoveFav}
              />
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    </main>
  );
};

export default Home;
