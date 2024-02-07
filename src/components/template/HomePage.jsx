import { useEffect, useState } from "react";
import { getCoinList } from "../services/cryptoApi";
import TableCoins from "./../modules/TableCoins";
import Pagination from "../modules/Pagination";
import Loader from "../Loader";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
  const [coins, setCoins] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
        console.log(json);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };
    getData();
  }, [page, currency]);

  return (
    <>
      <Search setCurrency={setCurrency} currency={currency} />
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <TableCoins
            setChart={setChart}
            coins={coins}
            setCurrency={setCurrency}
            currency={currency}
          />
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </>
  );
}

export default HomePage;
