import { useState } from 'react';
import className from 'classnames';

const Index = () => {
  const [colored, setColored] = useState(false);

  const handleClick = () => {
    setColored(!colored);
  };

  return (
    <div className="page">
      <div className={className('hi', colored ? 'color' : 'sketch')} onClick={handleClick}></div>
    </div>
  );
};

export default Index;
