import React from "react";

export default function Loader(props) {
  const { name } = props;

  return (
    <div>
      <li>{name}</li>
    </div>
  );
}
