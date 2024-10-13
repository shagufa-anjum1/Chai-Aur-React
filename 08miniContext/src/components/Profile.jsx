import React, { useContext } from 'react';
import UserContext from '../context/UserContext'; // Make sure the path is correct

function Profile() {
    const { user } = useContext(UserContext); // Use lowercase 'user' here to match

    if (!user) return <div>Please Login</div>;

    return <div>Welcome {user.username}</div>
    
}

export default Profile
