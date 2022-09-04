import React from "react";

const SingleUser = ({ person }) => {
  // const {name,age,phone,single}= person;
  return (
    <>
      <h1>hello</h1>
      <li>
        <h2>{person.name}</h2>
        <h3>{person.age}</h3>
        <p>{person.phone}</p>
        <h3>{person.single}</h3>
      </li>
    </>
  );
};

export default SingleUser;
