import React from "react"

import Apply from "./containers/VagaSelec/Apply"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const AppRoutes = () =>{
    return(
    <Router>
        <Routes>
            <Route path={`/apply/:id`} element={<Apply />}/>
        </Routes>
    </Router>
    )
}

export default AppRoutes