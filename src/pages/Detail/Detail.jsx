import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'

function Details() {
    let [cards, setCards] = useState([])
    let {id} = useParams()
    useEffect(()=>{
        axios.get(`https://northwind.vercel.app/api/customers/${id}`).then((res)=>setCards(res.data))
    }, [])
  return (
    <section className='details'>

    <div><b>{"Customer ID:"}</b> {cards.id}</div>
    <div><b>{'Customer Company Name:'}</b> {cards.companyName}</div>
    <div><b>{'Customer Contact Name:'}</b> {cards.contactName}</div>
    <div><b>{'Customer Contact Title:'}</b> {cards.contactTitle}</div>
    <div><b>{'Customer Address:'}</b> {cards.address?.city}</div>
    <div><b>{'Customer Phone:'}</b> {cards.address?.phone}</div>


    </section>
  )
}

export default Details