import React from "react";
import "./TextArrow.css";

const TextArrow = ({ text, className }) => {
  return (
    <div className={`text-arrow-container ${className}`}>
      <span className="text-arrow-text">{text}</span>
      <div className="text-arrow-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 14 14"
          width="1em"
          height="1em"
          role="img"
          style={{ marginRight: "5px" }}
        >
          <path
            class="ic-m-arrow_next_svg__ic_m_arrow_next"
            d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default TextArrow;