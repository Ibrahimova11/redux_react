import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Table.css'

function Table() {
    const [usersState, setUserState] = useState([])
  useEffect(()=>{
    axios.get('https://northwind.vercel.app/api/customers').then((res=>{setUserState(res.data)
    }))
  }, [])
  console.log(usersState);
  return (
    <section className='table'>
<table>
        <thead>
            <tr>
                <td><b>Id</b></td>
                <td><b>Company Name</b></td>
                <td><b>Contact Name</b></td>
                <td><b>Address Name</b></td>
                <td><b>Detail</b></td>
                <td ><b>Add to Favourite</b></td>

            </tr>
        </thead>
        <tbody>
            {usersState.map((user)=>{
                return (<tr>
                        <td>{user.id}</td>
                        <td>{user.companyName}</td>
                        <td>{user.contactName}</td>
                        <td>{user.address?.street}</td>

                        <Link to={`/details/${user.id}`}>
                        <button class='btn'>Detail</button>
                        <button class='btn_1'>Favourite</button>
                        </Link>
                        

                </tr>)
            })}
        </tbody>
    </table>
    </section>
    
  )
}

export default Table