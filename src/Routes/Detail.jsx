import React, { useEffect } from 'react'
import { useGlobalContext } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {dataState,dataDispatch} = useGlobalContext()
  const params = useParams()

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => dataDispatch({type:'GET_DENTIST',payload: data}))
    .catch((err) => console.log(err))
  },[url,dataDispatch])

  console.log(dataState.dentist);

  return (
    <>
      <div className="justify-evenly mx-auto gap-6 h-auto max-w-screen-md my-28 bg-primary bg-opacity-30 p-8 rounded-3xl">
        <h1 className=' font-bold border-b-2 pb-4 border-gray-400'> Detail to dentist ID: {dataState.dentist.id} </h1>
        <div className="flex justify-around flex-wrap gap-14 mt-4 p-10">
          <img
            src="/images/doctor.jpg"
            alt="doctor"
            style={{ display: "block", borderRadius: "100px", width: "250px" }}
          />
          <div className="flex flex-col justify-around mb-4 space-y-4 text-center md:text-start">
            <h3>
              <strong>Name:</strong> {dataState.dentist.name}
            </h3>
            <h3>
              <strong>Email:</strong> {dataState.dentist.email}
            </h3>
            <h3>
              <strong>Phone:</strong> {dataState.dentist.phone}
            </h3>
            <h3>
              <strong>WebSite:</strong> {dataState.dentist.website}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Detail