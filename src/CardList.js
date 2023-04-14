import React from "react";
import Card from "./Card";
import { robots } from "./robots";

const CardList = () => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            image={robots[i].username}
          />
        );
      })}
    </div>
  );
};

export default CardList;
