import { useState, useCallback, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  const [viewCount, setViewCount] = useState(0)
  const [downloadCount, setDownloadCount] = useState(0)

  // useEffect para contar visualizações da página
  useEffect(() => {
    // Simular contagem de visualizações (em produção, isso viria de uma API)
    const savedViews = localStorage.getItem('portfolioViews')
    const savedDownloads = localStorage.getItem('portfolioDownloads')
    
    if (savedViews) {
      setViewCount(parseInt(savedViews))
    } else {
      const initialViews = Math.floor(Math.random() * 100) + 50
      setViewCount(initialViews)
      localStorage.setItem('portfolioViews', initialViews.toString())
    }

    if (savedDownloads) {
      setDownloadCount(parseInt(savedDownloads))
    } else {
      localStorage.setItem('portfolioDownloads', '0')
    }

    // Incrementar visualização atual
    const currentViews = parseInt(savedViews || '0') + 1
    setViewCount(currentViews)
    localStorage.setItem('portfolioViews', currentViews.toString())
  }, [])

  const handleDownload = useCallback(() => {
    setIsDownloading(true)
    
    // Simular download do resumo
    setTimeout(() => {
      setIsDownloading(false)
      
      // Incrementar contador de downloads usando useState
      const currentDownloads = downloadCount + 1
      setDownloadCount(currentDownloads)
      localStorage.setItem('portfolioDownloads', currentDownloads.toString())
      
      // Criar um link temporário para download
      const link = document.createElement('a')
      link.href = '#'
      link.download = 'resumo-guilherme-andrade.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 1000)
  }, [downloadCount])

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img 
              src="/guilherme-photo.jpg" 
              alt="Guilherme Andrade" 
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-greeting">Olá, eu sou</span>
              <span className="hero-name">Guilherme Andrade</span>
            </h1>
            <h2 className="hero-subtitle">Engenheiro de Dados | Desenvolvedor | Analista</h2>
            <div className="hero-location">
              <span>📍 São Paulo - SP</span>
              <span>📱 (85) 98963-8663</span>
            </div>
            <p className="hero-description">
              Profissional bilíngue, estudando no exterior (EAD) com foco em Dados, Desenvolvimento e Suporte. 
              Especializado em engenharia de dados, desenvolvimento de soluções ETL/ELT, análise de dados 
              e construção de dashboards. Experiência com Python, SQL, Power BI, Azure, GCP e AWS.
            </p>
            <div className="hero-tags">
              <span className="hero-tag">Desenvolvimento</span>
              <span className="hero-tag">Dados</span>
              <span className="hero-tag">Bilíngue</span>
              <span className="hero-tag">IA</span>
              <span className="hero-tag">Suporte</span>
              <span className="hero-tag">Scrum</span>
            </div>
            <div className="hero-contact">
              <a href="https://www.linkedin.com/in/guilhermeandradesv/" target="_blank" rel="noopener noreferrer" className="hero-contact-link">
                LinkedIn
              </a>
              <a href="mailto:guilhermeandradesv@gmail.com" className="hero-contact-link">
                E-mail
              </a>
              <a href="https://wa.me/5585989638663" target="_blank" rel="noopener noreferrer" className="hero-contact-link">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat-item">
            <span className="hero-stat-number">{viewCount}</span>
            <span className="hero-stat-label">Visualizações</span>
          </div>
          {downloadCount > 0 && (
            <div className="hero-stat-item">
              <span className="hero-stat-number">{downloadCount}</span>
              <span className="hero-stat-label">Downloads</span>
            </div>
          )}
        </div>
        <button 
          className="hero-button"
          onClick={handleDownload}
          disabled={isDownloading}
          aria-label="Baixar resumo"
        >
          {isDownloading ? 'Baixando...' : 'Download resumo'}
        </button>
      </div>
    </section>
  )
}

export default Hero
