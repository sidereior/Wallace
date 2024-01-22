import React, { useState } from 'react';
import { signIn, signUp } from './firebase'; // replace '../firebase' with the path to your firebase file

const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    await signIn(email, password);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    await signUp(email, password);
  };

  return (
    <div className="container mx-auto px-4 pt-10">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="mb-4">
        <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full w-32 h-32" />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Name</h2>
        <p>John Doe</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Billing</h2>
        <p>$0.00</p>
      </div>
      <form onSubmit={handleSignIn}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Sign in</button>
      </form>
      <form onSubmit={handleSignUp}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Profile;