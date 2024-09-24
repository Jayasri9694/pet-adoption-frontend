import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('/api/pets')
      .then((response) => {
        setPets(response.data);
      })
      .catch((error) => {
        console.error('Error fetching pets', error);
      });
  }, []);

  return (
    <div>
      <h1>Available Pets</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet._id}>
            {pet.name} - {pet.breed}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
