import React, { useState } from "react";

export default function MainContent({ name }) {
  // memakai state dengan menggunakan hook
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // toggle isActive state on click
    setIsActive((current) => !current);
  };
  return (
    <div>
      <main className={isActive ? "color-text" : ""}>{name}</main>
      <p>
        Button dibawah digunakan untuk merubah warna tulisan menjadi warna Hitam
        <br />
        serta merubah ukuran hurufnya dibuat menggunakan usestate pada
        functional komponen
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
