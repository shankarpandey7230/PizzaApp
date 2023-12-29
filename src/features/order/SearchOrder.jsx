import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-yellow focus:ring-opacity-50sm:w-64 w-28 rounded-full px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500 "
      />
    </form>
  );
};

export default SearchOrder;
