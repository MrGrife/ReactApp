import React from 'react'
import { Link } from "react-router-dom"

const NavLink = ({itemId}) => {
  return (
    <Link to={"/post/" + itemId}>show more...</Link>
  )
}

export default NavLink
