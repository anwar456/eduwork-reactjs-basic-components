import React from "react";

// menangkap props yang sudah dibuat menggunakan teknik distract
export default function header({ name }) {
  return (
    <div>
      {/* memanggil props */}
      <header>{name}</header>
    </div>
  );
}
