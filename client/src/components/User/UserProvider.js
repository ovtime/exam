import { useState, useEffect } from "react";
import UserContext from './UserContext';
import { getUser } from '../../services/user';


const UserProvider = ({ children, userId }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        getUser(userId).then(user => setUser(user));
    }, [userId]);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;