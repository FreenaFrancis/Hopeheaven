import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7000/api/user/getallusers')
            .then((res) => {
                console.log(res.data);
                setUsers(res.data); // Update the state with fetched users
            })
            .catch((err) => {
                console.log(err);
            });
    }, []); // Add an empty dependency array to run the effect only once on component mount

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>UserID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewUsers;
