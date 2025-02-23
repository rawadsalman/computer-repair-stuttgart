import React from 'react';

const angebote = [
  {
    id: 1,
    title: "Kostenlose Diagnose",
    description: "Erhalten Sie eine kostenlose Diagnose für Ihr Gerät.",
    icon: "🔍"
  },
  {
    id: 2,
    title: "Schnelle Reparatur",
    description: "Wir reparieren Ihre Geräte in kürzester Zeit.",
    icon: "⚡"
  },
  {
    id: 3,
    title: "Vor-Ort-Service",
    description: "Unser Techniker kommt direkt zu Ihnen nach Hause.",
    icon: "🏠"
  }
];

function Angebote() {
  return (
    <main className="main-content container">
      <h2>Unsere Angebote & Services</h2>
      <div className="card-grid">
        {angebote.map((angebot) => (
          <div key={angebot.id} className="card">
            <div className="card-icon">{angebot.icon}</div>
            <h3>{angebot.title}</h3>
            <p>{angebot.description}</p>
            <a href="/kontakt" className="btn card-btn">Mehr erfahren</a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Angebote;