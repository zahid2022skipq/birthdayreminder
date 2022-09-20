import React from "react";

const List = (props) => {
  return (
    <>
      {props.people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person">
            <img src={image} alt="birthday girl" /> <h4>{name}</h4>
            <p>{age}</p>
          </article>
        );
      })}
    </>
  );
};

export default List;
