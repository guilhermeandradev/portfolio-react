import { useState, useEffect, useRef } from 'react'
import './Projects.css'

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Sistema de FP&A com Power BI e Python',
      description: 'Desenvolvimento de dashboards financeiros e relatórios de desempenho para o time de FP&A. Implementação de pipelines ETL em Python para automação de dados financeiros, integração com MySQL e Azure, e criação de painéis interativos em Power BI para análise de planejamento financeiro.',
      image: '/fpa-project.jpg',
      likes: 0
    },
    {
      id: 2,
      title: 'Data Warehouse e ETL para Gaming',
      description: 'Construção e manutenção de Data Warehouse completo para análise de dados de gaming. Desenvolvimento de processos ETL otimizados em Python, gerenciamento de grandes volumes de dados em PostgreSQL, implementação de soluções de BI com Power BI e Looker, e automação de fluxos com Power Automate e n8n.',
      image: '/data-warehouse-project.jpg',
      likes: 0
    },
    {
      id: 3,
      title: 'APIs REST e Integração de Sistemas',
      description: 'Desenvolvimento de APIs REST para integração de sistemas, arquitetura de soluções de integração de alto nível, implementação de CI/CD com GitHub, e automação de processos. Trabalho com Python e C# para desenvolvimento backend, incluindo arquitetura de documentos e padrões de integração.',
      image: '/api-project.jpg',
      likes: 0
    }
  ])

  const [visibleProjects, setVisibleProjects] = useState([])
  const [projectLikes, setProjectLikes] = useState({})
  const projectsRef = useRef(null)

  // useEffect para carregar likes salvos do localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem('projectLikes')
    if (savedLikes) {
      try {
        setProjectLikes(JSON.parse(savedLikes))
      } catch (e) {
        console.error('Erro ao carregar likes:', e)
      }
    } else {
      // Inicializar likes com 0 para cada projeto
      const initialLikes = {}
      projects.forEach(project => {
        initialLikes[project.id] = 0
      })
      setProjectLikes(initialLikes)
      localStorage.setItem('projectLikes', JSON.stringify(initialLikes))
    }
  }, [projects])

  // useEffect para animações de entrada dos projetos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.dataset.projectId)
            setVisibleProjects((prev) => {
              if (!prev.includes(projectId)) {
                return [...prev, projectId]
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const projectElements = projectsRef.current?.querySelectorAll('.project-item')
    projectElements?.forEach((el) => observer.observe(el))

    return () => {
      projectElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Função para incrementar likes usando useState
  const handleLike = (projectId) => {
    setProjectLikes((prev) => {
      const newLikes = {
        ...prev,
        [projectId]: (prev[projectId] || 0) + 1
      }
      localStorage.setItem('projectLikes', JSON.stringify(newLikes))
      return newLikes
    })
  }

  return (
    <section id="projetos" className="projects">
      <div className="projects-container" ref={projectsRef}>
        <h2 className="projects-title">Projetos</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project-item ${
                visibleProjects.includes(project.id) ? 'visible' : ''
              }`}
              data-project-id={project.id}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/246x180/E8F4F8/21243D?text=${encodeURIComponent(project.title)}`
                  }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <button
                  className="project-like-btn"
                  onClick={() => handleLike(project.id)}
                  aria-label="Curtir projeto"
                >
                  ❤️ {projectLikes[project.id] || 0}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
