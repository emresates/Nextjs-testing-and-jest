import React from "react";

const List = ({
  products,
  suffix,
}: {
  products?: string[];
  suffix?: string;
}) => {
  return (
    <>
      <ul>
        {products?.map((product, index) => {
          return <li key={index}>{product}</li>;
        })}
      </ul>

      <div>Modern Testing {suffix}</div>
    </>
  );
};

export default List;
