import { useEffect, useState } from "react";

// creating a our coustom hooks which return only value data after making an api call
function useCurrencyInfo(currency) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json()) // converting response in json
      .then((res) => setData(res[currency])); // inside the repsonse , selected the key whose value is equal to curenct

    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;