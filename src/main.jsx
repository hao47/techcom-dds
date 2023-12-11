import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Loading from './pages/Loading/Loading.jsx'
// import Loading from './pages/Intro/Intro.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Loading />
  </React.StrictMode>,
)
