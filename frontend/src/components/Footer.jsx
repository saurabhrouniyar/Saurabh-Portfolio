import React from "react";

export default function Footer(){
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()} Saurabh — Built with ❤️
      </div>
    </footer>
  );
}
