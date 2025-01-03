import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const baseStyle =
    "px-4 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    secondary: "bg-gray-300 text-black hover:bg-gray-400 focus:ring-gray-200",
  };
  const disabledStyle = "opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]} ${
        disabled ? disabledStyle : ""
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
