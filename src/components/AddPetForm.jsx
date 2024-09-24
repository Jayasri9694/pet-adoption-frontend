import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddPetForm = () => {
  const handleSubmit = async (values) => {
    try {
      await axios.post('/api/pets', values);
      alert('Pet added successfully!');
    } catch (err) {
      console.error('Error adding pet', err);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        breed: '',
        age: '',
        temperament: '',
        description: '',
        image: ''
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        breed: Yup.string().required('Required'),
        age: Yup.number().required('Required').positive().integer(),
        temperament: Yup.string().required('Required'),
        description: Yup.string().required('Required')
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="name" type="text" placeholder="Name" />
        <ErrorMessage name="name" component="div" />
        <Field name="breed" type="text" placeholder="Breed" />
        <ErrorMessage name="breed" component="div" />
        <Field name="age" type="number" placeholder="Age" />
        <ErrorMessage name="age" component="div" />
        <Field name="temperament" type="text" placeholder="Temperament" />
        <ErrorMessage name="temperament" component="div" />
        <Field name="description" type="text" placeholder="Description" />
        <ErrorMessage name="description" component="div" />
        <button type="submit">Add Pet</button>
      </Form>
    </Formik>
  );
};

export default AddPetForm;
