import React from "react";
import "./css/ArrowButton.css";

const ArrowButton = ({ text, fontColor, backgroundColor }) => {
  return (
    <button
      className="arrow-button"
      style={{ color: fontColor, backgroundColor: backgroundColor }}
    >
      {text}
      <div className="arrow-button-svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 14 14"
          width="1em"
          height="1em"
          role="img"
          style={{ marginLeft: "5px", marginTop: "4px" }}
        >
          <path
            class="ic-m-arrow_rotate_right_svg__ic_m_arrow_rotate_right"
            d="M4.375 1.724a.64.64 0 0 0-.12.045.639.639 0 0 0-.239.319c-.019.073-.026 1.483-.026 4.918 0 4.214.004 4.83.035 4.933a.532.532 0 0 0 .476.358c.199 0 .109.084 2.716-2.518 1.492-1.488 2.489-2.501 2.519-2.557a.533.533 0 0 0 .008-.432c-.054-.106-4.9-4.96-5.008-5.016a.612.612 0 0 0-.361-.05"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default ArrowButton;
