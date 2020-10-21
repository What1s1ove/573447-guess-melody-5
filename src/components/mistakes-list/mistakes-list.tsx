import * as React from 'react';

type Props = {
  mistakesCount: number;
};

const MistakesList: React.FC<Props> = ({ mistakesCount }) => (
  <div className="game__mistakes">
    {Array.from(new Array(mistakesCount), (_, idx) => (
      <div className="wrong" key={idx} />
    ))}
  </div>
);

export default MistakesList;
