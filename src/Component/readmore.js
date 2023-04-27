import React, { useState } from "react";
import "./App.css";
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 44) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
const Content = () => {
    return (
      <div className="container">
        <h2>
          <ReadMore>
            Telugu,Hindi,English,Spanish,French,Russian,Portuguese,German
          </ReadMore>
        </h2>
      </div>
    );
  };
    
  export default Content;