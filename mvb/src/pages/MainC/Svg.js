import React from 'react';
import s from './s.svg';

function Svg() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <img
        src={s}
        alt="رسم توضيحي"
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
      />
    </div>
  );
}

export default Svg;