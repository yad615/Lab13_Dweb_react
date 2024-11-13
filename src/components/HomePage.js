import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Package, ChartBar, Shield, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="feature-icon" />,
      title: "Gestión de Clientes",
      description: "Administre eficientemente su cartera de clientes con herramientas avanzadas de gestión y seguimiento en tiempo real.",
      link: "/clientes"
    },
    {
      icon: <Package className="feature-icon" />,
      title: "Control de Productos",
      description: "Mantenga un registro detallado de su inventario y catálogo de productos con actualizaciones automáticas.",
      link: "/productos"
    },
    {
      icon: <ChartBar className="feature-icon" />,
      title: "Análisis y Reportes",
      description: "Obtenga insights valiosos con nuestras herramientas de análisis avanzado y reportes personalizados.",
      link: "/reportes"
    }
  ];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Sistema de Gestión</h1>
          <p className="hero-description">
            Optimice sus operaciones empresariales con nuestra plataforma 
            todo en uno. Diseñada para impulsar su productividad y crecimiento.
          </p>
          <button className="hero-button" onClick={() => navigate('/demo')}>
            Solicitar Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="feature-section">
        <div className="container mx-auto text-center">
          <h2 className="section-title">Funcionalidades principales</h2>
          <p className="section-description">Descubra las herramientas que impulsarán su negocio al siguiente nivel</p>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <button 
                  onClick={() => navigate(feature.link)}
                  className="feature-button"
                >
                  Explorar
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container mx-auto text-center">
          <h2 className="section-title text-white">¿Por qué elegirnos?</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-title stat-number">500+</h3>
              <p className="stat-value">Clientes satisfechos</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-title">99.9%</h3>
              <p className="stat-value">Tiempo de actividad</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-title">24/7</h3>
              <p className="stat-value">Soporte en tiempo real</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seguridad Banner */}
      <section className="security-banner">
        <h2 className="section-title text-white">
          ¡Seguridad y confiabilidad garantizada en todo momento!
        </h2>
        <p className="text-lg text-white">
          Con medidas avanzadas de seguridad para proteger tu información y tus datos sensibles.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
