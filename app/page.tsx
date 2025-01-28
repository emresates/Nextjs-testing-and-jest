"use client";
import { useEffect, useState } from "react";

export default function Home({ suffix }: { suffix?: string }) {
  const [state, setState] = useState<string | null>("Ahmet");

  useEffect(() => {
    setTimeout(() => {
      setState("Mehmet");
    }, 300);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <p>Modern World</p>

      <button>Button</button>

      {/* queryBy */}
      {/* <p>{suffix ? suffix : "No suffix"}</p> */}

      {/* {suffix && <p>{suffix}</p>}
      {!suffix && <p>No suffix</p>} */}

      <p>{state}</p>
    </div>
  );
}
