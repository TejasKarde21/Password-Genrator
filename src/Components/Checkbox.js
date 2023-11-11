import React from "react";

function Checkbox({ containDigitKey, handleDigitKey, strKey }) {
  return (
    <div className="flex self-center justify-between mt-6 w-[50%]">
      <label htmlFor="input">{strKey}</label>
      <input
        type="checkbox"
        id="input"
        checked={containDigitKey}
        onChange={handleDigitKey}
        className="ml-3"
      />
    </div>
  );
}

export default Checkbox;