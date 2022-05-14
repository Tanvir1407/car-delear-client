import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [myItem,setMyItem ] =useState([])
    const userEmail = user?.email

    useEffect(() => {
        fetch(`http://localhost:5000/myitem?email=${userEmail}`)
            .then(res => res.json())
            .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MyItem;