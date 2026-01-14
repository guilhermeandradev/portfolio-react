import { useState, useMemo, useEffect } from 'react'
import './Blog.css'

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: 'Otimização de Pipelines ETL com Python',
      date: '20 Jan 2024',
      tags: ['Python', 'ETL'],
      description: 'Compartilho técnicas avançadas para otimizar pipelines ETL em Python, incluindo processamento paralelo, uso eficiente de memória e boas práticas para trabalhar com grandes volumes de dados. Abordo também integração com Azure e GCP para ambientes cloud.'
    },
    {
      id: 2,
      title: 'Construindo Dashboards Eficazes com Power BI',
      date: '15 Jan 2024',
      tags: ['Power BI', 'Analytics'],
      description: 'Guia prático sobre criação de dashboards financeiros e analíticos eficazes usando Power BI. Discuto design de visualizações, otimização de consultas DAX, e melhores práticas para apresentação de dados para stakeholders e times de FP&A.'
    }
  ])

  const [selectedTag, setSelectedTag] = useState('Todos')
  const [filteredPosts, setFilteredPosts] = useState(posts)

  // useEffect para filtrar posts baseado na tag selecionada
  useEffect(() => {
    if (selectedTag === 'Todos') {
      setFilteredPosts(posts)
    } else {
      const filtered = posts.filter(post => 
        post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      )
      setFilteredPosts(filtered)
    }
  }, [selectedTag, posts])

  // Extrair todas as tags únicas dos posts
  const allTags = useMemo(() => {
    const tagsSet = new Set()
    posts.forEach(post => {
      post.tags.forEach(tag => tagsSet.add(tag))
    })
    return ['Todos', ...Array.from(tagsSet)]
  }, [posts])

  const formattedPosts = useMemo(() => {
    return filteredPosts.map(post => ({
      ...post,
      formattedTags: post.tags.join(', ')
    }))
  }, [filteredPosts])

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">Blog</h2>
          <div className="blog-filters">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`blog-filter-btn ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="blog-grid">
          {formattedPosts.length > 0 ? (
            formattedPosts.map(post => (
              <article key={post.id} className="blog-card">
                <h3 className="blog-card-title">{post.title}</h3>
                <div className="blog-card-meta">
                  <span className="blog-card-date">{post.date}</span>
                  <span className="blog-card-separator">|</span>
                  <span className="blog-card-tags">{post.formattedTags}</span>
                </div>
                <p className="blog-card-description">{post.description}</p>
              </article>
            ))
          ) : (
            <p className="blog-no-posts">Nenhum post encontrado com esta tag.</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Blog
