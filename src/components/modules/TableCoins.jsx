import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { marketChart } from "./../services/cryptoApi";

function TableCoins({ coins, setCurrency, currency, setChart }) {
  return (
    <div className="w-full  mt-8  mx-auto md:max-w-[1000px] px-5">
      <table className="w-full text-white border-collapse overflow-x-scroll min-w-[700px]">
        <thead className="w-full">
          <tr className=" border-b-4 h-14 md:text-lg text-sm">
            <th className="text-start">Coin</th>
            <th className="text-start">Name</th>
            <th className="text-start">Price</th>
            <th className="text-start">24h</th>
            <th className="text-start">Total Volume</th>
            <th className="text-start"></th>
          </tr>
        </thead>
        <tbody className="w-full">
          {coins.map((coin) => (
            <TableRow
              setChart={setChart}
              key={coin.id}
              coin={coin}
              setCurrency={setCurrency}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCoins;

function TableRow({ coin, currency, setChart }) {
  const {
    id,
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  } = coin;
  const modalHandler = () => {
    const chartData = async () => {
      try {
        const res = await fetch(marketChart(id));
        const json = await res.json();
        setChart({ ...json, coin });
      } catch (error) {
        setChart(null);
        console.log(error);
      }
    };
    chartData();
  };

  return (
    <tr className=" border-b-2 border-collapse border-slate-600 h-14 md:text-lg text-xs ">
      <td>
        <div
          onClick={modalHandler}
          className=" flex justify-start items-center gap-x-2 pr-14 cursor-pointer">
          <img src={image} alt={name} className="w-7" />
          <span className="font-bold">{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {current_price.toLocaleString()}
        <span className="text-yellow-400">
          {currency === "usd" ? "$" : currency === "eur" ? "€" : "¥"}
        </span>
      </td>
      <td className={`${price_change > 0 ? "text-green-500" : "text-red-500"}`}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
}
