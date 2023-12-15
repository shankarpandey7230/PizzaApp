import { useState } from 'react';

const CreateUser = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>✋ Welcome! Please start by telling your name:</p>
      <input
        type="text"
        placeholder="Your fullname"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </form>
  );
};

export default CreateUser;
