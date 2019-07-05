import React from "react";

const Icon: React.FC = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 1792 1792">
      <path
        d="M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"
        fill="#fff"
      />
    </svg>
  );
};

export const EraserTool: React.FC = () => {
  return <Icon />;
};
