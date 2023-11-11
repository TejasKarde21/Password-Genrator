
import "./App.css";
import { useState } from "react";
import Checkbox from "./Components/Checkbox";
import Number from "./Components/Number";

function App() {
  console.log("i am rendering");
  const [password, setPassword] = useState("");
  const [containUppercase, setContainUppercase] = useState(false);
  const [containDigit, setContainDigit] = useState(false);
  const [containSymbol, setContainSymbol] = useState(false);
  const [length, setLength] = useState(8);

  // const [users, setUsers] = useState(() => {
  //   const num = 10;
  //   return num;
  // });

  // setContainSymbol((prevSymbolValue) => {
  //   return !prevSymbolValue;
  // })

  function handleDigit() {
    setContainDigit(!containDigit);
  }

  function handleUppercase() {
    setContainUppercase(!containUppercase);
  }

  function handleSymbol() {
    setContainSymbol((prev) => {
      return !prev;
    });
  }

  function handleLength(event) {
    setLength((prev) => {
      return event.target.value;
    });
  }

  function copypassword() {
    navigator.clipboard.writeText(password);
  }

  function generatePassword() {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let dict = lowercaseChars;
    if (containDigit) {
      dict += numberChars;
    }
    if (containUppercase) {
      dict += uppercaseChars;
    }
    if (containSymbol) {
      dict += symbolChars;
    }
    let newPassoword = "";
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * dict.length);
      newPassoword += dict.charAt(randomIndex);
    }
    setPassword(newPassoword);
  }

  return (
    <div className="flex justify-center items-center  w-screen h-screen">
    <div className="App flex flex-col w-[90%]  p-9 m-6 shadow-2xl shadow-yellow-500">
      <h1 className="text-xl font-bold ">Create Your Password</h1>
    
      <Number lengthKey={length} handleLengthKey={handleLength}  />
  
      <Checkbox
        containDigitKey={containDigit}
        handleDigitKey={handleDigit}
        strKey={"Should the password contain Numbers"}
      />

      

      <Checkbox
        containDigitKey={containUppercase}
        handleDigitKey={handleUppercase}
        strKey={"Should the password contain Uppercase"}
      />

   

      <Checkbox
        containDigitKey={containSymbol}
        handleDigitKey={handleSymbol}
        strKey={"Should the password contain Symbols"}
      />

      <h1>{password}</h1>
      <div>
      <button
        className="border-1 border-slate-50 bg-blue-500 text-white p-1 py-2 rounded-md hover:bg-opacity-70 m-5 w-[40%] self-center shadow-xl  "
        onClick={generatePassword}
      >
        Click to generate the password
      </button>

      <button
        className="border-1 border-slate-50   text-gray-600 text-2xl p-1 py-2 rounded-md hover:bg-opacity-70 w-[20%] self-center mb-6"
        onClick={copypassword}
      >
        <i class="fa-solid fa-copy"></i>
      </button>
      </div>
    </div>
    </div>
  );
}

export default App;