import React from 'react';
import Icons from '../../assets/sprite.svg';

const Icon = props => {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill={props.fill}
      stroke={props.stroke}
      style={props.style}
    >
      <use href={Icons + '#icon-' + props.name} />
    </svg>
  );
};

export default Icon;
