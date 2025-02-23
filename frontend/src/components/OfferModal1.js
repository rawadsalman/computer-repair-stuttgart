import React from 'react';
import '../styles/offermodal.css';


function OfferModal({ offer, onClose }) {
  if (!offer) return null; // Falls kein Angebot ausgewählt ist

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{offer.title}</h2>
        <p>{offer.description}</p>
        <div className="photos">
          {offer.photos && offer.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`${offer.title} ${index + 1}`}
              className="offer-photo"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfferModal;
