import React, { useEffect,useState } from 'react'

function Postdata() {
const [data,setData]= useState([])

useEffect(()=>{
    fetch('http://localhost:3004/students').then((result)=>{
        result.json().then((resp)=>{
            console.log(resp)
            setData(resp)
        })
    })
})


    return (
        <>
            <h1>gettting students data</h1>
            <table border="1">
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>CHACOLATE</td>
                </tr>


{
    data.map((students)=><tr>
        <td>{students.id}</td>
        <td>{students.name}</td>
        <td>{students.chocolate}</td>
    </tr>)
}


            </table>
        </>
    )
}

export default Postdata
