import React from "react";
import Button from "../../Button";
import SomePerson from "./SomePerson";
const GetSection = () => {
  return (
    <div className="get">
      <h2 className="title">Working with GET request</h2>
      <div className="get__content">
        <SomePerson />
      </div>
      <Button text="Show more" />
    </div>
  );
};

export default GetSection;
