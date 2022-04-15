import React from "react";
import moment from "moment";
const Artcle = ({ title, date, length, snippet }) => {
  return (
    <article className="article">
      <h2 className="tittle">{title}</h2>
      <span>{moment(date).format("dddd, MMMM Do YYYY")}</span>
      <span>{length} min read</span>
      <p>{snippet}</p>
    </article>
  );
};

export default Artcle;
