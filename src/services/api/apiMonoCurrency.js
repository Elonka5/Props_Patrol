import axios from 'axios';

export async function fetchMonoCurrency() {
  const { data } = await axios.get('https://api.monobank.ua/bank/currency');
  // console.log(data);
  return data;
}
