import { useState } from "react";
import { convertData } from "../../helpers/convertData";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));
  return (
    <div className="fixed w-full h-full top-0 left-0 custom-blure">
      <span
        onClick={() => setChart(false)}
        className="bg-red-500 text-white font-bold px-2 py-1 rounded-lg text-xl z-50 cursor-pointer ml-10  md:mt-7 mt-20 inline-block">
        X
      </span>
      <div className="w-[85%] backGround border-blue-600 sm:w-[70%] md:w-[50%] h-[300px] border-4 m-auto mt-32 rounded-2xl"></div>
    </div>
  );
}

export default Chart;
