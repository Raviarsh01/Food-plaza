import { useNavigate } from "react-router-dom";

const CommonRoute = (Children) => {
  const navigate = useNavigate();
  const role = 0;
  return role === 0 || role === 1 ? Children : navigate("/");
};

export default CommonRoute;
