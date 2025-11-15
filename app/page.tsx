'use client'

import { useState } from 'react'

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handleSubscribe = (plan: string) => {
    setSelectedPlan(plan)
    alert(`Merci pour votre intérêt! Un conseiller vous contactera pour finaliser votre abonnement ${plan}.`)
  }

  return (
    <main>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            💪 FitPro Gym
          </div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#tarifs">Tarifs</a></li>
            <li><a href="#horaires">Horaires</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <h1>Transformez Votre Corps</h1>
        <p>Rejoignez la meilleure salle de sport de la ville</p>
        <button className="cta-button" onClick={() => document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth' })}>
          Commencer Maintenant
        </button>
      </section>

      <section id="services" className="section">
        <h2>Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏋️</div>
            <h3>Musculation</h3>
            <p>Équipements de dernière génération pour tous vos exercices de musculation et de renforcement musculaire.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🤸</div>
            <h3>Cours Collectifs</h3>
            <p>Yoga, Zumba, Spinning, CrossFit et plus encore. Des cours adaptés à tous les niveaux.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏃</div>
            <h3>Cardio Training</h3>
            <p>Zone cardio complète avec tapis de course, vélos elliptiques et rameurs professionnels.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">👨‍🏫</div>
            <h3>Coaching Personnel</h3>
            <p>Des coachs certifiés pour vous accompagner et créer un programme sur mesure.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🥗</div>
            <h3>Nutrition</h3>
            <p>Conseils nutritionnels personnalisés et plans alimentaires adaptés à vos objectifs.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🧖</div>
            <h3>Espace Détente</h3>
            <p>Sauna, hammam et vestiaires équipés pour votre confort après l'entraînement.</p>
          </div>
        </div>
      </section>

      <section id="tarifs" className="section" style={{ background: 'white' }}>
        <h2>Nos Tarifs</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Découverte</h3>
            <div className="price">
              29€
              <span>/mois</span>
            </div>
            <ul className="features">
              <li>Accès salle de musculation</li>
              <li>Accès zone cardio</li>
              <li>Vestiaires & casiers</li>
              <li>Horaires normaux</li>
            </ul>
            <button className="subscribe-button" onClick={() => handleSubscribe('Découverte')}>
              S'inscrire
            </button>
          </div>

          <div className="pricing-card featured">
            <h3>Premium</h3>
            <div className="price">
              49€
              <span>/mois</span>
            </div>
            <ul className="features">
              <li>Tous les avantages Découverte</li>
              <li>Cours collectifs illimités</li>
              <li>Accès 7j/7 24h/24</li>
              <li>Sauna & hammam</li>
              <li>1 séance coaching/mois</li>
            </ul>
            <button className="subscribe-button" onClick={() => handleSubscribe('Premium')}>
              S'inscrire
            </button>
          </div>

          <div className="pricing-card">
            <h3>Elite</h3>
            <div className="price">
              79€
              <span>/mois</span>
            </div>
            <ul className="features">
              <li>Tous les avantages Premium</li>
              <li>Coaching personnel illimité</li>
              <li>Programme nutrition personnalisé</li>
              <li>Suivi performance</li>
              <li>Serviettes fournies</li>
              <li>Invité gratuit 2x/mois</li>
            </ul>
            <button className="subscribe-button" onClick={() => handleSubscribe('Elite')}>
              S'inscrire
            </button>
          </div>
        </div>
      </section>

      <section id="horaires" className="section">
        <h2>Horaires d'Ouverture</h2>
        <div className="hours-grid">
          <div className="hours-card">
            <h3>🌅 Lundi - Vendredi</h3>
            <p><strong>06:00 - 23:00</strong></p>
            <p>Accès complet à tous les services</p>
          </div>
          <div className="hours-card">
            <h3>🌤️ Samedi - Dimanche</h3>
            <p><strong>08:00 - 20:00</strong></p>
            <p>Accès complet à tous les services</p>
          </div>
          <div className="hours-card">
            <h3>🌙 Accès 24/7</h3>
            <p><strong>Premium & Elite</strong></p>
            <p>Disponible avec badge d'accès</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section" style={{ background: 'white' }}>
        <h2>Contactez-Nous</h2>
        <div className="contact-info">
          <h3>📍 Notre Adresse</h3>
          <p>123 Avenue du Sport, 75001 Paris</p>
          <h3 style={{ marginTop: '2rem' }}>📞 Téléphone</h3>
          <p>01 23 45 67 89</p>
          <h3 style={{ marginTop: '2rem' }}>📧 Email</h3>
          <p>contact@fitprogym.fr</p>
          <h3 style={{ marginTop: '2rem' }}>🕒 Réception</h3>
          <p>Lundi - Vendredi: 09:00 - 19:00</p>
          <p>Samedi: 10:00 - 18:00</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#horaires">Horaires</a>
            <a href="#contact">Contact</a>
          </div>
          <p>&copy; 2024 FitPro Gym. Tous droits réservés.</p>
          <p style={{ marginTop: '1rem', opacity: 0.8 }}>
            Votre salle de sport de référence pour atteindre vos objectifs
          </p>
        </div>
      </footer>
    </main>
  )
}
