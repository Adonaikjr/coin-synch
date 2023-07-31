import axios from 'axios'

export const FakeApi = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_FAKE_URL}`,
})
