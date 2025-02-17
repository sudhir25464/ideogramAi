import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import "./searchbar.css";

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 200);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`search-container ${isExpanded ? "expanded" : ""}`}>
      <button onClick={handleExpand} className="search-icon">
        <Search size={20} />
      </button>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
}
