import './Profile.css';
import { Link } from 'react-router-dom';

function Profile({ user, handleDeleteAccount }) {
  return (
    <div className="profile-dropdown">
      {user ? (
        <>
          <p className="profile-item">Hello, {user.name}</p>
          <p className="profile-item">Phone: {user.phoneNumber}</p>
          <Link to="/my-orders" className="profile-item">My Orders</Link>
          <button onClick={handleDeleteAccount} className="profile-item">Delete Account</button>
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
