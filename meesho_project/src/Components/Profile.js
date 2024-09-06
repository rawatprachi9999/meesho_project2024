import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Profile({ user, handleDeleteAccount }) {
  const navigate = useNavigate();

  const handleAccountDeletion = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (confirmDelete) {
      localStorage.removeItem('user');
      handleDeleteAccount(); // Update the state in the parent component
      navigate('/signin');
    }
  };

  return (
    <div className="profile-dropdown">
      {user ? (
        <>
          <p className="profile-item">Hello, {user.name}</p>
          <Link to="/my-orders" className="profile-item">My Orders</Link>
          <button onClick={handleAccountDeletion} className="profile-item">Delete Account</button>
        </>
      ) : (
        <>
          <p className="profile-item">Hello, Guest</p>
          <Link to="/signup" className="profile-item">Sign Up</Link>
          <Link to="/signin" className="profile-item">Sign In</Link>
        </>
      )}
    </div>
  );
}

export default Profile;
