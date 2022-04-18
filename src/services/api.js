import axios from "axios";

const api = axios.create({
    baseURL:'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccosmos%2Cdacxi%2Cterra-luna&vs_currencies=usd%2Cbrl%2Ceur'
});

export default api;

