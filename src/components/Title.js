import React from "react";

export default function Title({ title }) {
  return (
    <>
      <p className="is-size-3 has-text-weight-medium has-text-black-bis has-text-centered">
        {title}
      </p>
    </>
  );
}
