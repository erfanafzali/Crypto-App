const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-xXPpKhovw5VgxFU8rGUcF1FS";

export const getCoinList = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;
};

export const search = (text) => {
  return `${BASE_URL}/search?query=${text}&x_cg_demo_api_key=${API_KEY}`;
};

export const marketChart = (coin) => {
  return `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${API_KEY}`;
};
