import React, { useState } from 'react';

const InvitationForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Invitation</button>
    </form>
  );
};

export default InvitationForm;
