import { useEffect, useState } from 'react'



function Putdata() {
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [chocolate, setChocolate] = useState("")
    const [DD, setD] = useState()



    useEffect(() => {
        fetch('http://localhost:3004/students').then((result) => {
            result.json().then((resp) => {
                console.log(resp)
                setData(resp)
            })
        })
    })

    function insertvalue() {

        alert(`im being called ${id},${name},${chocolate}`)
        let item = { id, name, chocolate }
        fetch(`http://localhost:3004/students/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((reult) => {
            reult.json().then((resp) => {
                console.log(resp)
            })
        })

    }

function postingvalues(){
    let item = { id, name, chocolate }
    fetch(`http://localhost:3004/students`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((reult) => {
            reult.json().then((resp) => {
                console.log(resp)
            })
        })
}



    function SelectUser(id) {

        alert(data[id - 1].name)
        setId(data[id - 1].id)
        setName(data[id - 1].name)
        setChocolate(data[id - 1].chocolate)

    }


    function delet(id) {
        alert(id)
        fetch(`http://localhost:3004/students/${id}`, {
            method: 'delete'
        }).then((result1) => {
            result1.json().then((res) => {
                setD(res)
            })
        })

    }


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
                    data.map((students) => <tr>
                        <td>{students.id}</td>
                        <td>{students.name}</td>
                        <td>{students.chocolate}</td>
                        <td><button onClick={() => { delet(students.id) }}>delite</button></td>
                        <td><button onClick={() => { SelectUser(students.id) }}>edit</button></td>


                    </tr>)
                }


            </table>
            <br />
            <h2>editingnew field</h2>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={chocolate} onChange={(e) => setChocolate(e.target.value)} />
            <input type="submit" onClick={() => { insertvalue() }} />
            <br />
            <h2>inserting new field</h2>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={chocolate} onChange={(e) => setChocolate(e.target.value)} />
            <input type="submit" onClick={() => { postingvalues() }} />





        </>
    )
}

export default Putdata