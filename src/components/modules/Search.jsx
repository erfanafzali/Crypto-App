import { useEffect } from "react";
import { useState } from "react";
import { search } from "../services/cryptoApi";
import LoaderSearch from './../LoaderSearch';
 

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    }

    const searchCoin = async () => {
      try {
        const res = await fetch(search(text), { signal: controller.signal });
        const json = await res.json();
        console.log(json);
        if (json.coins) {
          setIsLoading(false);
          setCoins(json.coins);
        } else {
          console.log(json.status.error_message);
          alert(json.status.error_message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setIsLoading(true);
    searchCoin();

    return () => controller.abort();
  }, [text]);

  return (
    <div className="w-full mx-auto flex justify-start px-4 items-center gap-x-6 md:max-w-[1000px] mt-12">
      <div className="">
        <input
          className="w-52 py-0.5 pb-1 rounded-lg border-0 outline-0 bg-blue-700 px-4 text-white font-semibold"
          type="text"
          value={text}
          placeholder="search crypto ..."
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="">
        <select
          className="px-2 py-0.5 bg-blue-600 border-0 outline-0 text-white font-semibold rounded-lg "
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
        </select>
      </div>

      {(!!coins.length || isLoading) && (
        <div className="absolute px-3 py-2 w-56 overflow-y-scroll top-24 flex flex-col justify-start items-start z-50 h-60 rounded-lg bg-blue-900 text-white font-semibold">
          {isLoading && <LoaderSearch />}
          <ul className="">
            {coins.map((coin) => {
              return (
                <li
                  key={coin.id}
                  className=" w-full flex justify-start items-center gap-x-2  pb-1">
                  <img src={coin.thumb} alt={coin.name} />
                  <p>{coin.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
