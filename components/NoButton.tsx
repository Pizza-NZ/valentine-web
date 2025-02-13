"use client";

import React, { useState } from "react";

const NoButton = () => {
  const [counter, setCounter] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const messages = [
    "You Sure Dorky??",
    "I will get sad!",
    "No chocolate then!",
    "Please Please Please!",
    "Okay Big Hugs Now,\nFINAL OFFER!",
  ];

  const handleClick = () => {
    if (counter < messages.length) {
      setMessage(messages[counter]);
      setShowMessage(true);
      setCounter(counter + 1);
    }
  };

  const handleClose = () => {
    setShowMessage(false);
  };

  return (
    <div>
      <button
        className={`w-full border-2 py-2 text-custom-purple rounded-xl bg-card text-card-foreground shadow hover:drop-shadow-lg hover:bg-custom-purple hover:text-slate-50 ${
          counter >= messages.length ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleClick}
        disabled={counter >= messages.length}
      >
        ✗ No thanks, next year!
      </button>

      {showMessage && ( // Conditionally render the message box
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          {" "}
          {/* Full-screen overlay */}
          <div className="fixed top-0 left-0 w-full h-full bg-white/50 backdrop-blur-sm"></div>{" "}
          {/* Semi-transparent backdrop with blur */}
          <div className="bg-white border-2 rounded-md shadow-lg p-6 relative">
            {" "}
            {/* Message box on top */}
            <p className="text-lg">{message}</p>
            <button
              onClick={handleClose}
              className="mt-4 bg-gray-200 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoButton;
