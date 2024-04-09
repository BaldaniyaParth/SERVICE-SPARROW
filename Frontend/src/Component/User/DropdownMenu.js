import React, { useState, useRef, useEffect } from "react";

const DropdownMenu = ({ menuItems, alignment, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left z-50" ref={ref}>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      {isOpen && (
        <div
          className={`absolute origin-top-right ${alignment} py-1 mt-2 w-56 rounded-md shadow-soft bg-white ring-1 ring-black ring-opacity-5`}
        >
          <div className="py-1" role="menu" aria-labelledby="options-menu">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <button
                  onClick={item.onClick}
                  className={`block w-full text-left px-4 py-1 sm:py-2 text-sm font-outfit ${item.className ? item.className : ""
                    }`}
                  role="menuitem"
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt="icon"
                      className="inline-block mr-3 h-4 w-4"
                    />
                  )}
                  {item.label}
                </button>
                {index < menuItems.length - 1 && (
                  <hr className="my-1 border-t border-solid border-[#E8EFF7]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
