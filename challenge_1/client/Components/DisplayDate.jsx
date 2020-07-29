import React from 'react';

const DisplayDate = ({ date }) => {
  const dateChecker = () => {
    if (date[0] === '-') {
      let newDate = date.slice(1);
      return <p>Date - {newDate}BC</p>;
    }
    return <p>Date - {date}</p>;
  }

  return (
    <div>
      {dateChecker()}
    </div>
  );
}

export default DisplayDate
