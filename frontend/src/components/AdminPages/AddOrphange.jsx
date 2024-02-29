// AddOrphanage.js

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const AddOrphanage = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phonenumber: '',
    description: '',
    volunteername: '',
    volunteeremail: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      image: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('phonenumber', formData.phonenumber);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('volunteername', formData.volunteername);
      formDataToSend.append('volunteeremail', formData.volunteeremail);
      formDataToSend.append('image', formData.image);

      const response = await axios.post('http://localhost:7000/api/orphange/addorphange', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      alert("orphange added sucessfully")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Orphanage Information Form</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow-lg rounded">
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="location">
                <Form.Label>Location:</Form.Label>
                <Form.Control type="text" name="location" value={formData.location} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phonenumber">
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="volunteername">
                <Form.Label>Volunteer Name:</Form.Label>
                <Form.Control type="text" name="volunteername" value={formData.volunteername} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="volunteeremail">
                <Form.Label>Volunteer Email:</Form.Label>
                <Form.Control type="email" name="volunteeremail" value={formData.volunteeremail} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image:</Form.Label>
                <Form.Control type="file" accept="image/*" name="image" onChange={handleImageChange} required />
              </Form.Group>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrphanage;
