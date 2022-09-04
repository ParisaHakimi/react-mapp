import React from "react";
import style from"../static/li.module.css"
const SingleUser = ({ person }) => {
  const {name,age,phone,single}= person;
  return (
    <>
      <li className={style.person}>
        <h2>Name: {name}</h2>
        <h3>Age:{age}</h3>
        <p>phone: {phone}</p>
        <h3 style={{color:single ? "red" : "green"}}>{single? "is single" : " is married"}</h3>
      </li>
    </>
  );
};

export default SingleUser;
