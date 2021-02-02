
import React from 'react';
import { Route, Redirect } from "react-router-dom";
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

const ProtectedRoute = ({ component: Component, ...props  }) => {
  return (
    <Route>
      
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="./" />
      }
    </Route>
)}

export default ProtectedRoute; 