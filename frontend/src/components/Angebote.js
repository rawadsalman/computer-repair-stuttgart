// src/components/Angebote.js
import React, { useState } from 'react';
import OfferModal from './OfferModal';

const angeboteData = [
  {
    id: 1,
    title: "Kostenlose Diagnose",
    description: "Erhalten Sie eine kostenlose Diagnose für Ihr Gerät. Unsere erfahrenen Techniker überprüfen Ihr Gerät gründlich.",
    image: "https://via.placeholder.com/300x200?text=Diagnose",
    photos: [
      "https://via.placeholder.com/600x400?text=Diagnose+Detail+1",
      "https://via.placeholder.com/600x400?text=Diagnose+Detail+2"
    ]
  },
  {
    id: 2,
    title: "Schnelle Reparatur",
    description: "Wir reparieren Ihre Geräte in kürzester Zeit. Profitieren Sie von unserem schnellen und zuverlässigen Service.",
    image: "https://via.placeholder.com/300x200?text=Reparatur",
    photos: [
      "https://via.placeholder.com/600x400?text=Reparatur+Detail+1",
      "https://via.placeholder.com/600x400?text=Reparatur+Detail+2"
    ]
  },
  {
    id: 3,
    title: "Vor-Ort-Service",
    description: "Unser Techniker kommt direkt zu Ihnen nach Hause, um Ihre Probleme vor Ort zu beheben.",
    image: "https://via.placeholder.com/300x200?text=Vor-Ort-Service",
    photos: [
      "https://via.placeholder.com/600x400?text=Vor-Ort+Detail+1",
      "https://via.placeholder.com/600x400?text=Vor-Ort+Detail+2"
    ]
  }
];

function Angebote() {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (offer) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOffer(null);
    setIsModalOpen(false);
  };

  return (
    <div className="angebote container">
      <h2>Unsere Angebote & Services</h2>
      <div className="angebote-grid">
        {angeboteData.map((angebot) => (
          <div key={angebot.id} className="angebot-card">
            {angebot.image && (
              <img
                src={angebot.image}
                alt={angebot.title}
                className="angebot-image"
              />
            )}
            <div className="angebot-content">
              <h3>{angebot.title}</h3>
              <p>{angebot.description}</p>
              <button
                className="btn card-btn"
                onClick={() => handleOpenModal(angebot)}
              >
                Mehr Erfahren
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal anzeigen, falls ein Angebot ausgewählt wurde */}
      {isModalOpen && (
        <OfferModal offer={selectedOffer} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Angebote;
