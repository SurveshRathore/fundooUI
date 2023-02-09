import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dasboard from "../Pages/Dashboard/Dasboard";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
function RouterConfig () {

    return(
        <div>
            <Router>
                <Routes >
                    <Route exact path='/' element={<SignIn />} />
                    <Route exact path='/signup' element={<SignUp />} />
                    <Route exact path='/homepage' element={<Dasboard />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouterConfig