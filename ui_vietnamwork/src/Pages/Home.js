import { NavLink } from "react-router-dom";


import React from 'react'

export default function Home() {
    return (
        <div class="container">
            <h1>ADMIN</h1>
            <NavLink to="/admin/company" class="button">Company CRUD</NavLink>
            <br></br>
            <NavLink to="/admin/applicant">Applicant CRUD</NavLink>
        </div>
    )
}
