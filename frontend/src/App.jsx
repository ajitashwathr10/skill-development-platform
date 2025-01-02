import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import ProgressTracker from './components/ProgressTracker';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path = "/" element = {<Home/>} />
                <Route path = "/login" element = {<Login/>} />
                <Route path = "/dashboard" element = {<Dashboard/>} />
                <Route path = "/course/:id" element = {<CourseDetail/>} />
                <Route path = "/progress" element = {<ProgressTracker/>} />
            </Routes>
        </Router>
    );
}

export default App;

