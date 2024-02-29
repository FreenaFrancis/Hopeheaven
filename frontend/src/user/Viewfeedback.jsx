import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewFeedback() {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        // Fetch feedback data from the backend server
        axios.get('http://localhost:7000/api/volunteer/receivefeedback')
            .then(response => {
                setFeedbackData(response.data);
            })
            .catch(error => {
                console.error('Error fetching feedback data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Feedback Table</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackData.map(feedback => (
                        <tr key={feedback._id}>
                            <td>{feedback.name}</td>
                            <td>{feedback.email}</td>
                            <td>{feedback.feedback}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewFeedback;
