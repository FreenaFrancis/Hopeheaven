import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Link } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

function Donate() {
  const [donates, setDonates] = useState([]);
  const { id } = useParams(); // Retrieve the orphanage ID from URL params
const navigate=useNavigate()
  useEffect(() => {
    const fetchDonates = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/orphange/donate');
        setDonates(response.data);
      } catch (error) {
        console.error('Error fetching donates:', error);
      }
    };

    fetchDonates();
  }, []);

  const handleclick=(e)=>{
    navigate(`/donationform/${id}`)
  }
  return (
    <div>
      <div style={{ display: 'flex', gap: '40px', marginLeft: '200px' }}>
        {donates.map((donate) => (
          <Card key={donate._id} sx={{ maxWidth: 500, marginBottom: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={`http://localhost:7000/public/images/${donate.image}`}
                alt={donate.donateCategory}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {donate.donateCategory}
                </Typography>
                {/* Construct the link to donation form */}
                {/* <Link to={`/donationform/${donate._id}`} style={{ textDecoration: 'none' }}> */}
                  <Button variant="contained" color="primary" onClick={handleclick}>
                    Click here to donate
                  </Button>
                {/* </Link> */}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Donate;
