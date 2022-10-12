import React from "react";
import { Link } from "react-router-dom";

const LinksList = ({ links }) => {
   
  if (links.length === 0) {
    return <p>нет Ссылок</p>;
  } else {
    return (
      <div>
        {links.links.map((item, index) => {
          return (
            <>
              <h1>Ваша ссылка : {item.from}</h1>
              <h2> To : {item.to}</h2>
              <Link to={`/detail/${item._id}`}> Открыть </Link>
            </>
          );
        })}
      </div>
    );
  }
};

export default LinksList;
