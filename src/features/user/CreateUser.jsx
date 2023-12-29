import { useState } from "react";
import Button from "../../ui/Button";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-stone=600 mb-4 text-sm md:text-base">
        ✋ Welcome! Please start by telling your name:
      </p>
      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />
      {username !== "" && (
        <div>
          <Button type="primary">Start Ordering</Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
