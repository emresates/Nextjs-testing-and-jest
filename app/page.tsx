export default function Home({ suffix }: { suffix?: string }) {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <p>Modern World</p>

      <button>Button</button>

      {/* <p>{suffix ? suffix : "No suffix"}</p> */}

      {suffix && <p>{suffix}</p>}
      {!suffix && <p>No suffix</p>}
    </div>
  );
}
