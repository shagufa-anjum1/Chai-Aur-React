import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-1">
                   {/* 1 */}
                 <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                     <button onClick={() => setColor("red")}
                       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "red" }} >Red</button>
                 </div>
                 {/* 2 */}
                 <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                     <button onClick={() => setColor("green")}
                     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "green" }} >Green</button>
                 </div>
                 {/* 3 */}
                 <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                     <button onClick={() => setColor("blue")}
                     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "blue" }} >Blue</button>
                 </div>
                 {/* 4 */}
                 <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                     <button onClick={() => setColor("black")}
                     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "black" }} >black</button>
                 </div>
                 {/* 5 */}
                 <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                     <button onClick={() => setColor("yellow")}
                     className="outline-none px-4 py-1 rounded-full text-black shadow-lg"  style={{ backgroundColor: "yellow" }} >Yellow</button>
                 </div>
                 {/* 6 */}
                 <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                     <button onClick={() => setColor("pink")}
                     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "pink" }} >Pink</button>
                 </div>
                 {/* 7 */}
                 <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                     <button onClick={() => setColor("gray")}
                     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "gray" }} >Gray</button>
                 </div>
                 {/* 8 */}
                 <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                     <button onClick={() => setColor("orange")}
                     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "orange" }} >Organe</button>
                 </div>
                 {/* 9 */}
                 <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                     <button onClick={() => setColor("white")}
                     className="outline-none px-4 py-1 rounded-full text-black shadow-lg"  style={{ backgroundColor: "white" }} >White</button>
                 </div>
                 {/* 10 */}
                 <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                     <button onClick={() => setColor("brown")}
                     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "Brown" }} >Brown</button>
                 </div>
                 {/* 11 */}
                 <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                     <button onClick={() => setColor("purple")}
                     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "purple" }} >Purple</button>
                 </div>
                 {/* 12 */}
                 <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
                     <button onClick={() => setColor("aqua")}
                     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  style={{ backgroundColor: "aqua" }} >Aqua</button>
                 </div>
        </div>
      </div>
    </>
  );
}

export default App; // Changed the period to a semicolon
