
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, favToggle, onRemoveFav }) => {

  const [toggle, setToggle] = useState(favToggle);
  
  console.log("Apenas entra en CARD", toggle);
  // useEffect(() => {
  //   setToggle(favToggle);
    
  // }, [favToggle]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favs")) || [];
    const exists = favorites.some((favorite) => favorite.id === id);
    setToggle(exists);
  }, [id]);

  
  const handleAddFav = () => {
    setToggle(!toggle);    
    
    const item = { name, username, id, toggle };

    console.log(item.toggle);

    const favorites = JSON.parse(localStorage.getItem("favs")) || [];

    const exists = favorites.some((favorite) => favorite.id === id);

    if (!exists) {
      favorites.push(item);
      setToggle(!toggle);

      localStorage.setItem("favs", JSON.stringify(favorites));
      console.log("favoritos", favorites);
      console.log("Elemento agregado a favoritos:", item);
    } else {
      setToggle(!toggle);
      const quitFav = favorites.filter((favoritos) => favoritos.id !== id);
      console.log("quitFav: ", quitFav);
      localStorage.setItem("favs", JSON.stringify(quitFav));
      console.log("El elemento se quito de favoritos:", item);
    }
  };

  return (
    <div className="min-w-min border border-black rounded-2xl">
      <Link to={`/home/dentist/${id}`}>
        <div className="max-w-xs">
          <img
            className="w-full rounded-t-2xl"
            src="/images/doctor.jpg"
            alt="doctor"
          />
          <div className="p-2">
            <h3>{name}</h3>
            <h3>{username}</h3>
            <h3>{`ID: ${id}`}</h3>
          </div>
          {/* <h3>estado: {toggle}</h3> */}
        </div>
      </Link>
      <button
        onClick={toggle ? onRemoveFav : handleAddFav}
        className=" bg-sky-600 bg-opacity-25 p-4 border-none w-60 cursor-pointer rounded-b-lg text-base min-w-full"
      >
        {toggle ? "Remove Favs" : "Add Favs"}
      </button>      
    </div>
  );
};
export default Card;
