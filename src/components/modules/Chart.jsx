import { useState } from "react";
import { convertData } from "../../helpers/convertData";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  const yAxisFormatter = (value) => {
    // انتخاب 4 رقم اول از مقدار و تبدیل به رشته
    return value.toString().slice(0, 6);
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 custom-blure">
      <div className="w-[85%] backGround border-blue-600 sm:w-[70%] md:w-[70%] lg:md:w-[50%]  border-4 m-auto mt-24 rounded-2xl">
        <div className="w-full gap-x-4 flex justify-start items-center py-4 pl-6">
          <img src={chart.coin.image} alt="" className="w-8" />
          <p className="text-white font-bold text-xl">{chart.coin.name}</p>
        </div>

        <div className="h-full min-h-[300px] relative">
          <span
            onClick={() => setChart(false)}
            className="bg-red-500 text-white font-bold px-3 py-1 rounded-lg text-xl z-50 cursor-pointer ml-10  md:mt-7 mt-20 inline-block absolute -top-32 md:-top-20 right-4">
            X
          </span>
          <ChartComponent
            type={type}
            data={convertData(chart, type)}
            yAxisFormatter={yAxisFormatter}
          />
        </div>

        <div
          onClick={typeHandler}
          className="w-full flex justify-start items-start gap-x-8 pl-8 text-sm font-semibold text-blue-300">
          <button
            className={`border-2 border-blue-700 rounded-md px-2 py-0.5 pb-1 ${
              type === "prices" ? "bg-blue-700 text-white" : "null"
            }`}>
            Prices
          </button>
          <button
            className={`border-2 border-blue-700 rounded-md px-2 py-0.5 pb-1 ${
              type === "market_caps" ? "bg-blue-700 text-white" : "null"
            }`}>
            Market Caps
          </button>
          <button
            className={`border-2 border-blue-700 rounded-md px-2 py-0.5 pb-1 ${
              type === "total_volumes" ? "bg-blue-700 text-white" : "null"
            }`}>
            Total Volumes
          </button>
        </div>
        <div className="w-full flex justify-between items-center my-6 px-8 ">
          <div className="flex justify-center items-center gap-x-2 text-blue-500 font-bold text-sm">
            <p className="text-base">Prices:</p>
            <span className="text-blue-100 font-semibold ">
              {chart.coin.current_price}
            </span>
          </div>
          <div className="flex justify-center items-center gap-x-2 text-blue-500 font-bold text-sm">
            <p className="text-base">ATH:</p>
            <span className="text-blue-100 font-semibold">
              {chart.coin.ath}
            </span>
          </div>
          <div className="flex justify-center items-center gap-x-2 text-blue-500 font-bold text-sm">
            <p className="text-base">Market Cap:</p>
            <span className="text-blue-100 font-semibold">
              {chart.coin.market_cap}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

export function ChartComponent({ type, data, yAxisFormatter }) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="min-h-[280px] px-2 z-50">
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <CartesianGrid stroke="#404042" />
        <YAxis
          dataKey={type}
          domain={["auto", "auto"]}
          tickFormatter={yAxisFormatter}
        />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
