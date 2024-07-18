import React, { useState } from 'react';
import './TelanganaCuisines.css'; // Import your CSS file

const TelanganaCuisines = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    imageSrc: '',
    dishName: '',
    dishDescription: '',
  });

  const openModal = (imageSrc, dishName, dishDescription) => {
    setModalContent({ imageSrc, dishName, dishDescription });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <header>
        <h1> TELANGANA CULINARY DELIGHTS </h1>
      </header>

      <section>
        <div className="dish-container">
          {/* Dish items go here */}
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img className="modal-image" src={modalContent.imageSrc} alt="Dish" />
            <div className="modal-info">
              <h2>{modalContent.dishName}</h2>
              <p>{modalContent.dishDescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TelanganaCuisines;
