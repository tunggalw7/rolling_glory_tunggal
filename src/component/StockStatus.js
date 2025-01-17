import React from "react";

const StockStatus = ({ stock, styles }) => {
  if (stock === 0) {
    return (
      <span className={`text-red-secondary text-xs font-semibold ${styles}`}>
        Sold Out
      </span>
    );
  }

  if (stock < 5) {
    return (
      <span className={`text-red-secondary text-xs font-semibold ${styles}`}>
        Stock {"<"} 5
      </span>
    );
  }

  return (
    <span className={`text-green-primary text-xs font-semibold ${styles}`}>
      In Stock
    </span>
  );
};

export default StockStatus;
