import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
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
