import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const LoginForm = () => {
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/api/auth/login', values);
      setAuth(response.data.token);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
