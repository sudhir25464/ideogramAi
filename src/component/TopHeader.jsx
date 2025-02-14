import React from "react";
import "../CSS/header.css";
function TopHeader() {
  return (
    <div className="top-header">
      <div className="top-header-inner">
        <button className="upgrate-btn">

          <span>10</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#E51B46"
            viewBox="0 0 24 24"
          >
            <path
              fill="#E51B46"
              fill-rule="evenodd"
              d="M13.143 2.042a.996.996 0 00-.693.044c-.261.113-.528.34-.79.733L9.491 6.037c-.353.528-.867 1.28-1.318 1.94l-2.653 3.84v.002c-.26.38-.36.72-.37 1.008-.01.288.068.51.145.655.079.149.222.343.475.5.253.157.603.268 1.084.268h3.409v6.24c0 .136 0 .433.085.724.087.295.275.623.675.745a.926.926 0 00.271.041c.326 0 .59-.175.778-.352.188-.178.323-.38.391-.482l.002-.002 2.068-3.23.138-.206c.505-.755 1.233-1.844 1.698-2.526l2.13-3.156c.393-.58.492-1.23.207-1.768-.28-.53-.859-.81-1.543-.81H13.95V3.522c0-.475-.095-.816-.25-1.056a.992.992 0 00-.558-.425z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Upgrate
        </button>
      </div>
    </div>
  );
}

export default TopHeader;
