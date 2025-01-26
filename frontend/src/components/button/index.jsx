import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  href,
  text,
  variant = "contained" || "outlined",
  background = "primary" || "secondary",
}) => {
  const primaryBtn = `${
    variant === "contained"
      ? `text-white bg-primary hover:text-primary hover:bg-white`
      : `text-primary bg-white hover:text-white hover:bg-primary`
  }`;

  const secondaryBtn = `${
    variant === "contained"
      ? `text-white bg-secondary hover:text-secondary hover:bg-white`
      : `text-secondary bg-white hover:text-white hover:bg-secondary`
  }`;

  return background === "primary" ? (
    <Link
      to={href}
      className={`transition font-medium px-[38px] py-[12px] border rounded rounded-tl-2xl rounded-br-2xl ${primaryBtn}`}
    >
      {text}
    </Link>
  ) : (
    <Link
      to={href}
      className={`transition font-medium px-[38px] py-[12px] border rounded rounded-tl-2xl rounded-br-2xl ${secondaryBtn}`}
    >
      {text}
    </Link>
  );
};
export default Button;
