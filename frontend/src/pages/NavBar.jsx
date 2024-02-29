
// // NavBar.js
// import React, { useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';

// function NavBar() {
//   const { id } = useParams();
//   const user = JSON.parse(localStorage.getItem('currentUser'));
//   const logout = () => {
//     localStorage.removeItem('currentUser');
//     window.location.href = '/login';
//   };

//   useEffect(() => {
//     console.log(id);
//   }, [id]);

//   return (
//     <div className='na'>
//       <nav className="navbar navbar-expand-lg">
//         <a className="navbar-brand" href="/home">
//           HEYHOTEL
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mr-5">
//             {user ? (
//               <div className="dropdown">
//                 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   <li className='fa fa-user'></li>{user.name}
//                 </button>
//                 <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                   <Link to={`/profile/${id}`} className="dropdown-item">Profile</Link>
//                   <a className="dropdown-item" href="#" onClick={logout}>Logout</a>
//                 </div>
//               </div>
//             ) : (
//               <>
//                 <li className="nav-item active">
//                   <Link to="/register" className="nav-link">Register</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/login" className="nav-link">Login</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default NavBar;

import React from 'react'

function NavBar() {
  return (
    <div>
      
    </div>
  )
}

export default NavBar
