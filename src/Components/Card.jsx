import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, favToggle, onRemoveFav }) => {
  const [toggle, setToggle] = useState(favToggle);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favs")) || [];
    const exists = favorites.some((favorite) => favorite.id === id);
    setToggle(exists);
  }, [id]);

  const handleFavToggle = () => {
    const favorites = JSON.parse(localStorage.getItem("favs")) || [];
    const exists = favorites.some((favorite) => favorite.id === id);
    onRemoveFav(id);
    if (!exists) {
      const item = { name, username, id, toggle: !toggle };
      favorites.push(item);
      setToggle(true);
      localStorage.setItem("favs", JSON.stringify(favorites));
      
    } else {
      const quitFav = favorites.filter((favoritos) => favoritos.id !== id);
      setToggle(false);
      localStorage.setItem("favs", JSON.stringify(quitFav))
    }
  };

  return (
    <div className="min-w-min border border-black rounded-2xl hover:shadow-2xl">
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
        </div>
      </Link>
      <button
        onClick={handleFavToggle}
        className=" bg-sky-600 bg-opacity-25 p-4 border-none w-60 cursor-pointer rounded-b-2xl text-base min-w-full hover:bg-sky-500 hover:opacity-60 hover:text-black"
      >
        {toggle ? "Remove Favs" : "Add Favs"}
      </button>
    </div>
  );
};

export default Card;
