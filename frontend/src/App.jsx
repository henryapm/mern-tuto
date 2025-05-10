import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
      <>
        <main className={`h-screen box-border ${darkMode ? 'dark ' : ''}bg-white dark:bg-gray-700 `}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/create" element={<CreatePage />}/>
          </Routes>
        </main>
      </>
        
  )
}

export default App
