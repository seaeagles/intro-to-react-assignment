import React from 'react';

function UserProfile(props) {
    const { user } = props;
  
    return (
      <div className="user-profile">
        <img src={user.imgUrl} alt="User's image" className="avatar" />
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  }
  
  export default UserProfile;