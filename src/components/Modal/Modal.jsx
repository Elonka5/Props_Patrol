import React from 'react';

export default function Modal({ onClick = () => {} }) {
  return (
    <>
      <div>Modal</div>
      <button type="button" onClick={onClick}>
        Close
      </button>
    </>
  );
}
