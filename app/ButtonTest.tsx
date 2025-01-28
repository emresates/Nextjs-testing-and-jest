import React from "react";

const ButtonTest = ({
  onclick,
  children,
}: {
  onclick: (value: string) => void;
  children: React.ReactNode;
}) => {
  const handleOnClick = () => {
    onclick("hey clicked");
  };

  return <button onClick={handleOnClick}>{children}</button>;
};

export { ButtonTest };
