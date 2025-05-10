import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './header.jsx'
import SideBar from './SideBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <SideBar />
    <h1>My App</h1>
    <p>This is the main content of my application.</p>
  </StrictMode>,
)
