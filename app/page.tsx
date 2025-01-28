"use client";
import { useEffect, useState } from "react";

export default function Home({ suffix }: { suffix?: string }) {
  // const [state, setState] = useState<string | null>("Ahmet");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setState("Mehmet");
  //   }, 300);
  // }, []);

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleCopy = () => {
    window.navigator.clipboard.writeText("Heey");
  };

  const handleOnClick = () => {
    console.log("Clicked");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      {/* <p>Modern World</p>

      <button>Button</button> */}

      {/* queryBy */}
      {/* <p>{suffix ? suffix : "No suffix"}</p> */}

      {/* {suffix && <p>{suffix}</p>}
      {!suffix && <p>No suffix</p>} */}

      {/* <p>{state}</p> */}

      {/* <p className="text-2xl">Modern Testing</p> */}
      {/* //* For Keyboard and Mouse events */}
      {/* <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button> */}

      {/* //* Clipboard Events */}
      {/* <h1>{count}</h1>
      <button onClick={handleCopy}>Copy</button>
      <input type="text" /> */}

      {/* //* Select Options */}
      {/* <select multiple>
        <option value="elma">Elma</option>
        <option value="armut">Armut</option>
        <option value="muz">Muz</option>
      </select> */}

      {/* //* Type */}
      {/* <input type="text" /> */}


      <button onClick={handleOnClick}>
        Click me
      </button>


    </div>
  );
}
