import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong  </h1>
    </div>
  );
};
export default NotFound;
