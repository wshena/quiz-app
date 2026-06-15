import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} aria-label="Little Quiz">
      <span className="font-bold capitalize tracking-wide text-md lg:text-2xl">
        Little Quiz
      </span>
    </Link>
  );
};

export default Logo;
