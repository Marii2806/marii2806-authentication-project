import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Private = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userData = sessionStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
        setLoading(false);
    }, []);

    if (!user && !loading) {
        return <Link to="/login" />;
    }

    return (
        <div className="container">
            <h2>Private</h2>
            <p>Welcome, {user && user.email}!</p>
            <p>The content is restricted and requires users to be authenticated or logged in to access it.</p>
        </div>
    );
};

export default Private;