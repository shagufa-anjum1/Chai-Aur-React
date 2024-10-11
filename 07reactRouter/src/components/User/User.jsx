import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-3xl bg-orange-700 capitalize text-white font-serif font-semibold p-5 '>User: {userid}</div>
  )
}

export default User