import React from 'react';

const list = (props) => {
  const handler = function (e) {
    console.log(e.target.getAttribute('data-index')); //will log the index of the clicked item
  };

  var listItems = props.items.map(function (item, index) {
    return (
      <li key={index} data-index={index} onClick={handler}>
        {item.text}
      </li>
    );
  });

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};
