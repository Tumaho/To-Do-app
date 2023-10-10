import React from 'react'
import cookie from 'react-cookies'
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({component, ...rest}) {
    const isAuthenticated = cookie.load('user');
  return (
    <div>
        {isAuthenticated ? < div {...rest} ></div> : <Navigate to="/"/>}
    </div>
  )
}