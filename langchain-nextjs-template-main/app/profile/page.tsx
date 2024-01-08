t adimport React from 'react';

const Profile = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <div className="mb-4">
                <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full w-32 h-32" />
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold">Name</h2>
                <p>test</p>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold">Billing</h2>
                <p>$100.00</p>
            </div>
        </div>
    );
};

export default Profile;