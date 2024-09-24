import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const RegistrationForm = () => {
  const handleSubmit = async (values) => {
    try {
      await axios.post('/api/auth/register', values);
      alert('User registered successfully!');
    } catch (err) {
      console.error('Error during registration', err);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="name" type="text" placeholder="Name" />
        <ErrorMessage name="name" component="div" />
        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
