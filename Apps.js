import React, { useEffect, useState } from "react"

const Apps=()=>{

  const[Data,SetData]=useState([])

  const GetCovidData= async()=>{
    const response=await fetch('https://data.covid19india.org/data.json')
    const reward=await response.json()
    SetData(reward.statewise)
    console.log(Data)
  }

  useEffect(()=>{
    GetCovidData()
  })

  return(
    <>
  <h1>India Covid Tracker</h1>
    <div className="table-responsive">
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Active</th>
            <th>deaths</th>
            <th>Updated</th>
          </tr>
        </thead>
        {Data.map((CurElem)=>{
          return(
            <tbody>
            <td>{CurElem.state}</td>
            <td>{CurElem.confirmed}</td>
            <td>{CurElem.recovered}</td>
            <td>{CurElem.active}</td>
            <td>{CurElem.deaths}</td>
            <td>{CurElem.lastupdatedtime}</td>
          </tbody>
          )
        })}
      </table>
    </div>
    </>
  )
}

export default Apps;

