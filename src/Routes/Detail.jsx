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
      <div className="justify-evenly flex-wrap mx-auto gap-6 h-[720px] w-6/12 my-28">
        <h1>Detail to dentist ID: {dataState.dentist.id} </h1>
        <div className="flex justify-around flex-wrap gap-4 mt-6">
          <img
            src="/images/doctor.jpg"
            alt="doctor"
            style={{ display: "block", borderRadius: "100px", width: "250px" }}
          />
          <div className="flex flex-col justify-around mb-4">
            <h3>Name: {dataState.dentist.name}</h3>
            <h3>Email: {dataState.dentist.email}</h3>
            <h3>Phone: {dataState.dentist.phone}</h3>
            <h3>Website: {dataState.dentist.website}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Detail