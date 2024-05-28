// src/pages/micuenta.js
import React from "react";
import Layout from "../components/layout"
/* 👇 New code 👇 */ 
import { Link } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";
/* 👇 Import the withAuthenticationRequired HOC 👇 */ 
import { withAuthenticationRequired } from '@auth0/auth0-react';
import LoginButton from "../components/loginbutton/loginbutton.js/loginbutton"
import LogoutButton from "../components/logoutbutton/logoutbutton"

const MiCuenta = ()=> {
  const { user } = useAuth0();
  return (
    <>
    <Layout>
      <div>
        <p>Esta es la página protegida de mi cuenta</p>
        <p>Foto: {user.picture}</p>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
      <div>
      <LoginButton/>
    </div>
    <div>
      <LogoutButton/>
    </div>
    </Layout>
    </>
  )
}

export default withAuthenticationRequired(MiCuenta)