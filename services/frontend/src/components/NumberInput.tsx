import React, { useState } from 'react';

export default function NumberInput({ onSubmit }: { onSubmit: (n: number) => void }) {
  const [value, setValue] = useState('');
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(Number(value)); }}>
      <input
        type="number"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Enter a number"
        required
      />
      <button type="submit">Ask the Parity Oracle</button>
    </form>
  );
}
