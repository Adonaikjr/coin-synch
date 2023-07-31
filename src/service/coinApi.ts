import axios, { AxiosInstance } from 'axios'

export const coinApi: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_COIN_API}/v1`,
  headers: {
    'X-CoinAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
  },
})
