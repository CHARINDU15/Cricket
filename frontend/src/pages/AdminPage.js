import React from 'react';
import AdminPanel from '../components/AdminPanel';
import useAuth  from '../hooks/useAuth';

const AdminPage = () => {
    const { user } = useAuth();

    if (!user || !user.isAdmin) {
        return <div>You do not have access to this page.</div>;
    }

    return (
        <div className="admin-page">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <AdminPanel />
        </div>
    );
};

export default AdminPage;