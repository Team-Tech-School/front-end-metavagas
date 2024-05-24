// import axios
import axios from "axios";

// Here's the connection of api with the application.

const BASE_URL = "https://back-end-metavagas-production.up.railway.app/v1";

export const api = axios.create({
   baseURL: BASE_URL,
   headers: {
      "Content-Type": "application/json",
   },
});
