import { useEffect, useState } from "react";

function App() {
  // 로딩을 위한 state
  const [loading, setLoading] = useState(true);
  // 코인 리스트(API data)를 잠시 갖고 있기 위한 state
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        // json data 확인용
        // console.log(json);
        // 추출한 json 데이터 coins에 저장
        setCoins(json);
        // 로딩메세지 없애기
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? "" : <h2>Total : {coins.length}</h2>}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
