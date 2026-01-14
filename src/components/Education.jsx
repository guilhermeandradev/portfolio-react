import { useState } from 'react'
import './Education.css'

const Education = () => {
  const [expandedId, setExpandedId] = useState(null)

  const education = [
    {
      id: 1,
      institution: 'Universidade Brigham Young',
      degree: 'Bacharelado em Desenvolvimento de Software',
      location: 'EAD - Exterior',
      period: 'Em andamento',
      type: 'Graduação'
    },
    {
      id: 2,
      institution: 'Nove de Julho University',
      degree: 'Bacharelado em Ciência da Computação',
      location: 'São Paulo, SP',
      period: 'Concluído',
      type: 'Graduação'
    }
  ]

  const certifications = [
    {
      id: 1,
      name: 'Certificado Profissional de Ciência de Dados IBM',
      issuer: 'IBM'
    },
    {
      id: 2,
      name: 'Engenharia de Dados no Google Cloud',
      issuer: 'Google Cloud'
    },
    {
      id: 3,
      name: 'SnowFlake – Engenharia de Dados Academy',
      issuer: 'SnowFlake'
    },
    {
      id: 4,
      name: 'Arquiteto de Soluções Certificado AWS - Associado',
      issuer: 'AWS'
    },
    {
      id: 5,
      name: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft'
    },
    {
      id: 6,
      name: 'Líder Digital do Google Cloud',
      issuer: 'Google Cloud'
    }
  ]

  return (
    <section id="formacao" className="education">
      <div className="education-container">
        <h2 className="education-title">Formação Acadêmica</h2>
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <h3 className="education-institution">{edu.institution}</h3>
              <h4 className="education-degree">{edu.degree}</h4>
              <div className="education-meta">
                <span className="education-location">{edu.location}</span>
                <span className={`education-period ${edu.period === 'Em andamento' ? 'ongoing' : ''}`}>
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="education-title certifications-title">Certificações</h2>
        <div className="certifications-list">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-item">
              <div className="certification-badge">✓</div>
              <div className="certification-content">
                <h4 className="certification-name">{cert.name}</h4>
                <p className="certification-issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
