import React from "react";
import useRedirectTo from "../../hooks/useRedirectTo/useRedirectTo";
import "./FlushLIst.css"

const FlushList = ({ lists }) => {

  const { redirectTo} = useRedirectTo();

  return (
    <ul class="list-group list-group-flush">
      {lists &&
        lists.map((value, index) => {
          return (
            <li class="list-group-item cursor-pointer" key={index} onClick={() => redirectTo(value.redirectUrl)}>
              {value.name}
            </li>
          );
        })}
    </ul>
  );
};

export default FlushList;
