import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Library from './components/Library';
import Bookshelf from './components/Bookshelf';

function App() {
    return (
        <Router>
            <div className="dark:bg-gray-800 min-h-screen dark:text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Library />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/bookshelf" element={<Bookshelf />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
