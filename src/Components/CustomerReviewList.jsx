import React from 'react';

const CustomerReviewList = () => {
  return (
    <ul className="mt-4 space-y-4">
      <ReviewListItem tag="Positive" iconColor="#00AA6D" count={10} />
      <ReviewListItem tag="Good" iconColor="#3182CE" count={0} />
      <ReviewListItem tag="Neutral" iconColor="#CBD5E0" count={0} />
      <ReviewListItem tag="Negative" iconColor="#E53E3E" count={0} />
    </ul>
  );
};

const ReviewListItem = ({ tag, iconColor, count }) => {
  const renderIcons = () => {
    const icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(
        <i
          key={i}
          className="tio-user-big"
          style={{ color: iconColor, fontSize: '1.5rem', minWidth: '1.5rem' }}
        ></i>
      );
    }
    return icons;
  };

  return (
    <li className="flex flex-col sm:flex-row items-center justify-between flex-wrap">
      <div className="flex items-center mb-2 sm:mb-0">
        <span className="text-gray-700 text-lg font-medium mr-2">{tag}</span>
        <span className="text-gray-400">{`(${count} Customers)`}</span>
      </div>
      <div className="flex space-x-1 sm:space-x-2">
        {renderIcons()}
      </div>
      <span className="text-gray-500">{count > 0 ? '100%' : '0%'}</span>
    </li>
  );
};

export default CustomerReviewList;
