import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import { HeroApp } from './HeroApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <HeroApp />
    </HashRouter>
  </StrictMode>
)
