import { useState, useEffect, useCallback } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-brand">Portfolio</div>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
