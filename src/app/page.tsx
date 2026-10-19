"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>My Badminton Shop</h1>

      <p>Racket quantity: {count}</p>

      <button onClick={() => setCount(Math.min(15, count + 5))}>
        Add Racket
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <button onClick={() => setCount(Math.max(0, count - 2))} >
        Remove Racket
      </button>
    </main>
  );
}