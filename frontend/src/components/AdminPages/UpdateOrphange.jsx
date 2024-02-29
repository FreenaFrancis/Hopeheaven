import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateOrphanage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phonenumber: '',
    description: '',
    volunteername: '',
    volunteeremail: '',
    image: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrphanageData() {
      try {
        const response = await axios.get(`http://localhost:7000/api/orphange/getorphangebyid/${id}`);
        const orphanageData = response.data;
        setFormData(orphanageData);
      } catch (error) {
        console.error('Error fetching orphanage data:', error);
      }
    }
    fetchOrphanageData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };
  

  const handleImageChange = (e) => {
    setFormData(prevState => ({ ...prevState, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await axios.put(`http://localhost:7000/api/orphange/updateorphange/${id}`, formDataToSend);
      console.log('Orphanage updated successfully:', response.data);
      alert('Orphanage updated successfully');
      // navigate('/adminvieworphanage');
    } catch (error) {
      console.error('Error updating orphanage:', error);
    }
  };

  return (
    <div className='container'>
      <Form onSubmit={handleSubmit}>
        <h2 style={{ marginLeft: '600px' }}>Update Orphanage</h2>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter location" />
        </Form.Group>

        <Form.Group controlId="phonenumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} placeholder="Enter phone number" />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} placeholder="Enter description" />
        </Form.Group>

        <Form.Group controlId="volunteername">
          <Form.Label>Volunteer Name</Form.Label>
          <Form.Control type="text" name="volunteername" value={formData.volunteername} onChange={handleChange} placeholder="Enter volunteer name" />
        </Form.Group>

        <Form.Group controlId="volunteeremail">
          <Form.Label>Volunteer Email</Form.Label>
          <Form.Control type="email" name="volunteeremail" value={formData.volunteeremail} onChange={handleChange} placeholder="Enter volunteer email" />
        </Form.Group>
{/* 
        <Form.Group controlId="image">
          <Form.Label>Orphanage Image</Form.Label>
          <Form.Control type="file" accept="image/*" name="image" onChange={handleImageChange} />
          {/* {formData.image && (
            <img src={formData.image} alt="Orphanage Image" style={{ marginTop: '10px', maxWidth: '200px' }} />
          )} */}
        {/* </Form.Group> */} 
        
        
      <Form.Group controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" accept="image/*" name="image" onChange={handleImageChange}  />
      </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UpdateOrphanage;
