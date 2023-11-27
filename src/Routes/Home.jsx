
// import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context'
import Card from '../Components/Card'


// import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {  
  
  const {dataState}= useGlobalContext()
  let toggle = true
  
  return (
    <main className={dataState.theme ? "light" : "dark"}>
      <div className="mt-[60px] py-4 ">
        <h3> (click on the card to see details)</h3>

        <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-wrap h-auto max-w-7xl mx-auto text-center">
          {/* Renderizo las cards con un .map que pasa props a el componente Card*/}
          {dataState.listData.map((list) => (
            <div className="flex flex-col items-center mx-4 p-4" key={list.id}>
              <Card
                name={list.name}
                username={list.username}
                id={list.id}
                toggle={toggle}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );

}
export default Home