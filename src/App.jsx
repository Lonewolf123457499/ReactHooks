import { useCallback, useEffect, useRef, useState } from "react";
// import './App.css'

function App() {
  const [length, setlength] = useState(0);
  const [numberallowed, setallowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  

const passwordRef=useRef(null)
const  copyPassword=useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)

},[password])
  const passwordGenerator = useCallback(() => {
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm";
    if (numberallowed) {
      str = str + "0123456789";
    }
    if (charAllowed) {
      str = str + "~`! @#$%^&*()-_+={}[]|;:<>,./? ";
    }
    for (let index = 1; index <length; index++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char);
      1;
    }
    setPassword(pass);
  }, [length, numberallowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberallowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center">Password Generator</h1>
        <div
          className=" flex shadow-lg
         rounded-lg overflow-hidden mb-8 px-2 py-8"
        >
          <input
            type="text"
            value={password}
            placeholder="password"
            className="outline-none w-full"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-red-500 text-white px-3 py-0.5 shrink-0 "onClick={copyPassword}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              value={length}
              onChange={() => {
                setallowed((prev) => !prev);
              }}
            />
            <label>Number{numberallowed}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              value={length}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Symbol{charAllowed}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
