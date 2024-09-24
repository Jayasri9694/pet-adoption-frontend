import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios.get(`/api/pets/${id}`)
      .then((response) => {
        setPet(response.data);
      })
      .catch((error) => {
        console.error('Error fetching pet details', error);
      });
  }, [id]);

  if (!pet) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pet.name}</h1>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
      <p>Temperament: {pet.temperament}</p>
      <p>{pet.description}</p>
    </div>
  );
};

export default PetDetails;
