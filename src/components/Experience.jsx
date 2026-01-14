import { useState } from 'react'
import './Experience.css'

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null)

  const experiences = [
    {
      id: 1,
      company: 'Celcoin',
      position: 'Engenheiro de Dados – FP&A Team',
      location: 'São Paulo, SP',
      period: '2024-2025',
      description: [
        'Atuação no time de FP&A',
        'Análise de dados financeiros e relatórios de desempenho',
        'Desenvolvimento de painéis e relatórios usando Power BI e Excel',
        'Extração e automação de dados usando Python',
        'Gerenciamento e integração de dados financeiros em ambientes MySQL e Azure',
        'Suporte em processos de planejamento financeiro, previsão e controle orçamentário'
      ]
    },
    {
      id: 2,
      company: 'Open Gaming',
      position: 'Engenheiro de Dados',
      location: 'São Paulo, SP',
      period: '2023-2024',
      description: [
        'Desenvolvimento e otimização de processos ETL para integração de dados',
        'Desenvolvimento em Python',
        'Construção e manutenção de Data Warehouses',
        'Gerenciamento e análise de grandes conjuntos de dados em PostgreSQL e Metabase',
        'Implementação de soluções de BI com Power BI, Looker e Excel',
        'Desenvolvimento de APIs REST para integração de sistemas',
        'Arquitetura e gerenciamento de ambientes GCP e Azure',
        'Automação de fluxos de trabalho usando Power Automate, AI e n8n',
        'Administração e manutenção de mais de 20 servidores',
        'Aplicação de aprendizado de máquina para análise e previsão de dados',
        'Análise e otimização de campanhas do Google Ads e Meta',
        'Experiência em Spark, Airflow, AWS'
      ]
    },
    {
      id: 3,
      company: 'Grupo de Portfólio',
      position: 'Desenvolvedor Backend',
      location: 'Fortaleza, CE',
      period: '2022-2023',
      description: [
        'Desenvolvimento de automação',
        'Conduzir testes com clientes',
        'Monitoramento do funcionamento adequado das automações implementadas',
        'Programação em Python e C#',
        'Análise de dados',
        'Implementação de soluções de integração, usando CI/CD e GitHub',
        'Desenvolvimento de arquiteturas de sistemas de integração de alto nível',
        'Arquitetura de documentos, padrões de integração, decisões técnicas e manuais de melhores práticas',
        'Participação ativa no processo de revisão de código'
      ]
    },
    {
      id: 4,
      company: 'USA Containers',
      position: 'Engenheiro de Dados',
      location: 'Salt Lake, Utah',
      period: '2022',
      description: [
        'Auxiliar na documentação de processos de dados e melhores práticas de integração',
        'Implementar soluções ETL/ELT e integração de dados entre múltiplos sistemas e fontes de dados',
        'Manter pipelines de dados para ingerir, armazenar e processar grandes volumes de dados',
        'Projetar, desenvolver e implementar soluções para otimizar desempenho e escalabilidade',
        'Manutenção e supervisão das rotinas de Inteligência de Negócios',
        'Interpretação de grandes conjuntos e bancos de dados',
        'Participação na criação de consultas de banco de dados (SQL) para geração de relatórios'
      ]
    }
  ]

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experiencia" className="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experiência Profissional</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`experience-item ${expandedId === exp.id ? 'expanded' : ''}`}
            >
              <div className="experience-header" onClick={() => toggleExpand(exp.id)}>
                <div className="experience-main">
                  <h3 className="experience-company">{exp.company}</h3>
                  <h4 className="experience-position">{exp.position}</h4>
                  <div className="experience-meta">
                    <span className="experience-location">{exp.location}</span>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                </div>
                <button className="experience-toggle">
                  {expandedId === exp.id ? '−' : '+'}
                </button>
              </div>
              {expandedId === exp.id && (
                <div className="experience-details">
                  <ul className="experience-description">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
