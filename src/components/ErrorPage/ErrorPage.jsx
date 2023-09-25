import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Oops!!!</h2>
      <NavLink to="/">
        <button className="btn">Go to home</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
