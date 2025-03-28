"use client"
export default function Home() {
  return (
    <>
      <div className="p-2 overflow-y-auto">
        <h1 className=" text-xl font-semibold">Home</h1>
        <p className="break-all">
          {" "}
          Localstorage = {localStorage?.session}
        </p>
      
        
      </div>
    </>
  );
}
